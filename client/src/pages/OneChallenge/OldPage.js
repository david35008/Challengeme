import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
import Swal from 'sweetalert2';
import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import network from '../../services/network';
import { Logged } from '../../context/LoggedInContext';
import FilteredLabels from '../../context/FilteredLabelsContext';
import ReviewsTab from '../../components/Reviews';
import SubmitModal from '../../components/Modals/SubmitModal';
import Loading from '../../components/Loading';
import '../../styles/OldOneChallenge.css';
import { generateTime } from '../../utils';

const useStyles = makeStyles(() => ({
  getStartedButton: {
    background:
      'linear-gradient(270deg, rgba(55,99,192,1) 0%, rgba(87,159,223,1) 100%)',
    color: 'white',
    marginBottom: '10px',
  },
  getStartedButtonContainer: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  SubmitdButton: {
    background:
      'linear-gradient(270deg, rgba(55,99,192,1) 0%, rgba(87,159,223,1) 100%)',
    color: 'white',
    marginBottom: '10px',
    fontSize: '15px',
  },
  SubmitdButtonFail: {
    background:
      'linear-gradient(270deg, rgba(193,36,36,1) 0%, rgba(214,95,95,1) 100%)',
    color: 'white',
    marginBottom: '10px',
    fontSize: '15px',
  },
  SubmitdButtonSuccess: {
    background:
      'linear-gradient(270deg, rgba(36,193,67,1) 0%, rgba(130,214,95,1) 100%);',
    color: 'white',
    marginBottom: '10px',
    fontSize: '15px',
  },
}));

function ChallengePage() {
  const classes = useStyles();
  const [submissions, setSubmissions] = useState();
  const [challenge, setChallenge] = useState(null);
  const { id: challengeId } = useParams();
  const [image, setImage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState();
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingReq, setLoadingReq] = useState(false);
  const [ratingCount, setRatingCount] = useState('');
  const [boilerPlate, setBoilerPlate] = useState('');

  const filteredLabels = useContext(FilteredLabels);
  const LoggedContext = useContext(Logged);

  const getBoilerPlate = async () => {
    const { data: boilerPlate } = await network.get(
      `/api/v1/challenges/boiler-plate/${challengeId}`,
    );
    setBoilerPlate(boilerPlate.boilerPlate);
  };

  useEffect(() => {
    if (LoggedContext.logged) {
      const user = Cookies.get('userName');
      mixpanel.track('User On Challenge Page', {
        User: `${user}`,
        ChallengeId: `${challengeId}`,
      });
      getBoilerPlate();
    }
  }, []);

  const getLastSubmissions = async () => {
    try {
      const { data: submission } = await network.get(
        `/api/v1/submissions/by-user/${challengeId}`,
      );
      if (submission) {
        setSubmissionStatus({
          state: submission.state,
          createdAt: submission.createdAt,
        });
      } else {
        setSubmissionStatus(null);
      }
      setLoadingReq(true);
    } catch (error) {}
  };

  const fetchChallenge = async () => {
    try {
      const { data: challengeFromServer } = await network.get(
        `/api/v1/challenges/info/${challengeId}`,
      );
      setChallenge(challengeFromServer);
      setRating(
        challengeFromServer.averageRaiting
          ? Math.round(challengeFromServer.averageRaiting)
          : 0,
      );
      setSubmissions(challengeFromServer.submissionsCount);
    } catch (error) {}
  };

  const setImg = async () => {
    try {
      const { data } = await network.get(`/api/v1/images?id=${challengeId}`);
      setImage(data.img);
    } catch (error) {}
  };

  useEffect(() => {
    setImg();
    fetchChallenge();
    if (LoggedContext.logged) {
      getLastSubmissions();
    } else {
      setLoadingReq(true);
    }
    const getSubmissionInterval = setInterval(async () => {
      if (LoggedContext.logged) {
        getLastSubmissions();
      }
    }, 5000);

    return () => clearInterval(getSubmissionInterval);
  }, [challengeId]);

  function handleModalClose() {
    setIsModalOpen(false);
  }
  const getSubmissionButton = () => {
    if (!submissionStatus) {
      return LoggedContext.logged ? (
        <Button
          cy-test="submit-button"
          className={classes.SubmitdButton}
          variant="contained"
          onClick={() => setIsModalOpen(true)}
        >
          Submit
        </Button>
      ) : (
        <Button
          variant="contained"
          className={classes.SubmitdButton}
          onClick={() => Swal.fire({
            icon: 'error',
            title: 'You Must Login First!',
            showConfirmButton: true,
          })}
        >
          Submit
        </Button>
      );
    }

    if (submissionStatus.state === 'PENDING') {
      return <CircularProgress style={{ marginBottom: '20px' }} />;
    }
    if (submissionStatus.state === 'SUCCESS') {
      return (
        <Button
          cy-test="submit-again-button"
          className={classes.SubmitdButtonSuccess}
          variant="contained"
          onClick={() => setIsModalOpen(true)}
        >
          Submit again
        </Button>
      );
    }
    return (
      <Button
        cy-test="submit-again-button"
        className={classes.SubmitdButtonFail}
        variant="contained"
        onClick={() => setIsModalOpen(true)}
      >
        Submit again
      </Button>
    );
  };

  const getSubmissionStatus = () => {
    if (!submissionStatus) {
      return (
        <div>
          <p>
            You have not submitted any solution to this challenge yet,
            challenger! Prove your worth.
          </p>
        </div>
      );
    }
    if (submissionStatus.state === 'SUCCESS') {
      return (
        <div style={{ textAlign: 'center' }} cy-test="success-submission">
          <p>
            <div
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                marginBottom: '5px',
              }}
            >
              SUCCESS
            </div>
            You have already solved this challenge on
            {' '}
            {generateTime(submissionStatus.createdAt)}
            <br />
            {' '}
            You can submit another solution if you’d like:
          </p>
        </div>
      );
    }
    if (submissionStatus.state === 'PENDING') {
      return (
        <div cy-test="pending-submission">
          <p>Your submission is being tested</p>
        </div>
      );
    }
    return (
      <div style={{ textAlign: 'center' }} cy-test="fail-submission">
        <p>
          <div
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}
          >
            FAIL
          </div>
          You tried to solved this challenge on
          {' '}
          {generateTime(submissionStatus.createdAt)}
          {' '}
          <br />
          {' '}
          You can try to
          submit again
        </p>
      </div>
    );
  };

  return challenge ? (
    <div
      style={{
        overflowY: 'auto',
        height: '100vh',
        width: '100%',
        background:
          'linear-gradient(171.52deg, #1E3D5B 4.43%, rgba(30, 61, 91, 0) 149.79%)',
      }}
    >
      <div className="one-challenge-container">
        <div className="one-challenge-challenge-container">
          <h1 className="one-challenge-info-title" cy-test="challenge-name">
            <b>{challenge.name}</b>
          </h1>
          <img className="one-challenge-info-image" src={image} alt="" />
          <div className="one-challenge-info-container">
            <div className="one-challenge-description-title">
              <b>Description:</b>
              <div className="challenge-label">
                {challenge.Labels
                  && challenge.Labels.map((label) => (
                    <Link
                      cy-test={`challenge-label-${label.name}`}
                      className="link-rout"
                      key={label.id}
                      to="/"
                      onClick={() => filteredLabels.setFilteredLabels([label.id])}
                    >
                      <div className="one-challenge-labels">{label.name}</div>
                    </Link>
                  ))}
              </div>
            </div>
            <div
              className="one-challenge-description-body"
              cy-test="challenge-description"
            >
              {challenge.description}
            </div>
            <div className="one-challenge-author-uploaded-updated">
              <div cy-test="challenge-submissions">
                Submissions:
                {submissions}
              </div>
              <div
                className="one-challenge-author"
                cy-test="challenge-createdBy"
              >
                Created by:
                {' '}
                {challenge.Author.userName}
              </div>
              <div
                className="one-challenge-uploaded-at"
                cy-test="challenge-createdAt"
              >
                Created At:
                {' '}
                {`${generateTime(challenge.createdAt)} `}
              </div>
            </div>
            <div className="one-challenge-rating">
              <p>
                Rating:
                {rating}
                {' '}
                / 5
              </p>
              <Rating
                name="half-rating-read"
                value={rating}
                readOnly
                size="large"
              />
              <div>
                Total Ratings :
                {ratingCount}
              </div>
            </div>
          </div>
          <div className={classes.getStartedButtonContainer}>
            {LoggedContext.logged ? (
              <Button
                cy-test="challenge-boilerPlate"
                variant="contained"
                className={classes.getStartedButton}
                onClick={async () => {
                  const user = Cookies.get('userName');
                  mixpanel.track('User Started Challenge', {
                    User: `${user}`,
                    ChallengeId: `${challengeId}`,
                  });
                  try {
                    await network.post(
                      '/api/v1/webhooks/trigger-events/start-challenge',
                      { challengeName: challenge.name },
                    );
                  } catch (error) {}
                }}
                href={`https://github.com/${boilerPlate}`}
                target="_blank"
              >
                Start this challenge
              </Button>
            ) : (
              <Button
                cy-test="challenge-boilerPlate"
                variant="contained"
                className={classes.getStartedButton}
                onClick={() => Swal.fire({
                  icon: 'error',
                  title: 'You Must Login First!',
                  showConfirmButton: true,
                })}
              >
                Start this challenge
              </Button>
            )}
          </div>
        </div>
        <div className="one-challenge-submission-container">
          {loadingReq ? (
            <div className="one-challenge-submit-btn">
              <div className="submission-status">{getSubmissionStatus()}</div>
              {getSubmissionButton()}
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <CircularProgress style={{ margin: '30px' }} />
            </div>
          )}
          <SubmitModal
            isOpen={isModalOpen}
            handleClose={handleModalClose}
            challengeParamId={challengeId}
          />
        </div>
        <div
          className="one-challenge-reviews-container"
          cy-test="challenge-reviews"
        >
          <b className="one-challenge-reviews-title">Reviews :</b>
          <ReviewsTab
            challengeId={challenge.id}
            setRatingCount={setRatingCount}
          />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default ChallengePage;
