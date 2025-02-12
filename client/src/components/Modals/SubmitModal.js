import React, { useState, useCallback } from 'react';
import mixpanel from 'mixpanel-browser';
import {
  Modal,
  TextField,
  Button,
  Typography,
  Rating,
  Alert,
  AlertTitle,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import network from '../../services/network';
import { useModalStyles } from '../../utils';

function getModalStyle() {
  return {
    outline: 0,
    width: '50%',
    height: 'auto',
    overflowY: 'auto',
  };
}

function SubmitModal({
  isOpen,
  handleClose,
  challengeParamId,
  submissionStatus,
  updateSubmissionStatus,
}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userRating, setUserRating] = useState('0');
  const classes = useModalStyles();
  const [modalStyle] = useState(getModalStyle);
  const [badInput, setBadInput] = useState([]);
  const spaces = new RegExp(/^(\s{1,})$/);
  const hebrew = new RegExp(/^.*([\u0590-\u05FF]{1,}).*$/);

  const generateAlert = useCallback(
    (title, message) => (
      <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    ),
    [],
  );

  const submitForm = useCallback(
    async (data) => {
      let newBadInput;
      try {
        if (
          data.repository.length > 2 &&
          !data.repository.match(spaces) &&
          !data.repository.match(hebrew)
        ) {
          await network.get(
            `/api/v1/services/public-repo?repo_name=${data.repository}`,
          );
        } else {
          throw new Error();
        }
      } catch (err) {
        newBadInput = generateAlert(
          "Repository's Link is not valid.\n Check the suggestions below:",
          "- Type the Github repository in this format: owner/repo\n- Change your repository to public\n- Check for type errors.\nDon't use Hebrew letters",
        );
      }
      if (newBadInput) {
        setBadInput(newBadInput);
        setTimeout(() => setBadInput([]), 8000);
      } else {
        try {
          await network.post(
            `/api/v1/submissions/apply/${challengeParamId}`,
            data,
          );
          const user = Cookies.get('userName');
          mixpanel.track('User Submitted Challenge', {
            User: `${user}`,
            ChallengeId: `${challengeParamId}`,
            'Solution Repository': `${data.repository}`,
            Rating: `${data.rating}`,
          });
          updateSubmissionStatus();
        } catch (error) {}
        handleClose();
        setUserRating('0');
      }
    },
    [challengeParamId, hebrew, spaces, generateAlert, handleClose, updateSubmissionStatus],
  );

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={modalStyle} className={classes.paper}>
        <div style={{ marginLeft: '95%' }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '60%',
            margin: 'auto',
            height: '90%',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h5">Submit Your Solution</Typography>
          <TextField
            label="Solution repository Url"
            type="text"
            id="repoInput"
            placeholder="GitHub-UserName/GitHub-Repository-Name"
            {...register('repository', {
              required: true,
              pattern: /^([^ ]+\/[^ ]+)$/,
            })}
            style={{ marginTop: 8 }}
          />
          <Typography color="error" className="newChallengeFormDisplayErrors">
            {badInput}
          </Typography>
          {errors.repository?.type === 'pattern' && (
            <Typography
              variant="caption"
              id="required-repo"
              className={classes.formValidationError}
            >
              The text should look like "username/repository-name"
            </Typography>
          )}
          {errors.repository?.type === 'required' && (
            <Typography
              variant="caption"
              className={classes.formValidationError}
              id="required-repo"
            >
              Please enter a solution repository
            </Typography>
          )}
          <div
            style={{
              marginTop: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="subtitle1">Rate this challenge</Typography>
            <Rating
              name="rating"
              value={parseInt(userRating, 10)}
              onChange={(_, value) => setUserRating(value.toString())}
            />
          </div>
          <input
            name="rating"
            type="number"
            value={userRating}
            {...register('rating', { required: true, min: 1 })}
            hidden
            readOnly
          />
          {(errors.rating?.type === 'required' ||
            errors.rating?.type === 'min') && (
            <Typography
              variant="caption"
              id="required-rating"
              className={classes.formValidationError}
            >
              Please rate this challenge
            </Typography>
          )}
          <Typography variant="subtitle1" style={{ marginTop: 16 }}>
            Please leave your review here
          </Typography>
          <TextField
            cy-test="submit-title-input"
            label="Title"
            type="text"
            id="commentTitleInput"
            placeholder="Comment Title"
            {...register('commentTitle', { maxLength: 100 })}
            variant="outlined"
          />
          {errors.commentTitle?.type === 'maxLength' && (
            <Typography
              variant="caption"
              className={classes.formValidationError}
            >
              Title should be less than 100 characters
            </Typography>
          )}
          <TextField
            cy-test="submit-content-input"
            id="reviewContentInput"
            label="Content"
            multiline
            rows={4}
            placeholder="Leave your message here"
            {...register('commentContent', { maxLength: 255 })}
            variant="outlined"
            style={{ marginTop: 8 }}
          />
          {errors.commentContent?.type === 'maxLength' && (
            <Typography
              variant="caption"
              className={classes.formValidationError}
            >
              Your message should be less than 255 characters
            </Typography>
          )}
          {!submissionStatus ? (
            <Button
              variant="contained"
              color="primary"
              type="submit"
              id="submit-form"
              style={{
                marginTop: 16,
                borderRadius: 67,
                background: '#00AD98',
                width: '50%',
                marginLeft: '25%',
              }}
            >
              submit
            </Button>
          ) : submissionStatus.state === 'PENDING' ? (
            <CircularProgress style={{ marginBottom: '20px' }} />
          ) : submissionStatus.state === 'SUCCESS' ? (
            <>
              <h1
                style={{
                  color: '#00AD98',
                  margin: 'auto',
                  paddingTop: 3,
                  fontFamily: 'Ubuntu',
                }}
              >
                SUCCESS
              </h1>
              <div
                style={{
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  paddingTop: 3,
                  textAlign: 'center',
                }}
              >
                You solved this challenge {moment(submissionStatus.createdAt).fromNow()}, well...
                you made it look easy you better try another challenge
              </div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                id="submit-form"
                style={{
                  marginTop: 16,
                  borderRadius: 67,
                  background: '#00AD98',
                  width: '50%',
                  marginLeft: '25%',
                }}
              >
                submit again
              </Button>
            </>
          ) : (
            <>
              <h1
                style={{
                  color: '#EB0000',
                  margin: 'auto',
                  paddingTop: 3,
                  fontFamily: 'Ubuntu',
                }}
              >
                FAIL
              </h1>
              <div
                style={{
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  paddingTop: 3,
                  textAlign: 'center',
                }}
              >
                You tried to solve this challenge {moment(submissionStatus.createdAt).fromNow()}.
                You can try to submit again
              </div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                id="submit-form"
                style={{
                  marginTop: 16,
                  borderRadius: 67,
                  background: '#00AD98',
                  width: '50%',
                  marginLeft: '25%',
                }}
              >
                submit again
              </Button>
            </>
          )}
        </form>
      </div>
    </Modal>
  );
}

SubmitModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  challengeParamId: PropTypes.string.isRequired,
  submissionStatus: PropTypes.object,
  updateSubmissionStatus: PropTypes.func.isRequired,
};

export default SubmitModal;
