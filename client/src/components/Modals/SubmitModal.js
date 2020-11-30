import React, { useState } from 'react';
import mixpanel from 'mixpanel-browser';
import { Modal, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import network from '../../services/network';
import { Alert, AlertTitle } from "@material-ui/lab";
import Cookies from 'js-cookie';

function getModalStyle() {
  return {
    outline: 0,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formValidationError: {
    color: 'red',
    fontSize: '0.8em',
  },
}));

function SubmitModal({ isOpen, handleClose, challengeParamId }) {
  const { register, handleSubmit, errors } = useForm();
  const [userRating, setUserRating] = useState('0');
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [badInput, setBadInput] = useState([]);
  const spaces = new RegExp(/^(\s{1,})$/);
  const hebrew = new RegExp(/^.*([\u0590-\u05FF]{1,}).*$/);


  /* function to generate alerts for bad or missing inputs */
  const generateAlert = (title, message) => (
    <>
      <Alert severity='error'>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
      <br />
    </>
  );

  const submitForm = async (data) => {
    let newBadInput;
    try {
      if (
        data.repository.length > 2 &&
        !data.repository.match(spaces) &&
        !data.repository.match(hebrew)
      ) {
        await network.get(
          `/api/v1/services/public-repo?repo_name=${data.repository}`
        );
      } else {
        throw new Error();
      }
    } catch (err) {
      newBadInput = generateAlert(
        "Repository's Link is not valid.\n Check the suggestions below:",
        "- Type the Github repository in this format: owner/repo\n- Change your repository to public\n- Check for type errors.\nDon't use Hebrew letters"
      );
    }
    if (newBadInput) {
      setBadInput(newBadInput);
      setTimeout(() => {
        return setBadInput([]);
      }, 8000);
    } else {
      try {
        await network.post(
          `/api/v1/submissions/apply/${challengeParamId}`,
          data
        );
        const user = Cookies.get('userName')
        mixpanel.track("User Submited Challenge",
          {
            "User": `${user}`,
            "ChallengeId": `${challengeParamId}`,
            "Solution Repository": `${data.repository}`,
            "Rating": `${data.rating}`
          })
      }
      catch (error) {
      }
      handleClose();
      setUserRating('0');
    };
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={modalStyle} className={classes.paper}>
        <form
          onSubmit={handleSubmit(submitForm)}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant='h5'>Submit Your Solution</Typography>
          <TextField
            cy-test="submit-repo-input"
            label='Solution repository'
            type='text'
            id='repoInput'
            name='repository'
            placeholder='Owner/Repo'
            style={{ marginTop: 8 }}
            inputRef={register({
              required: true,
              pattern: /^([^ ]+\/[^ ]+)$/,
            })}
          />
          <Typography color='error' className='newChallengeFormDisplayErrors'>
            {badInput}
          </Typography>
          {errors.repository?.type === 'pattern' && (
            <Typography
              variant='caption'
              id='required-repo'
              className={classes.formValidationError}
            >
              The text should look like "username/repository-name"
            </Typography>
          )}
          {errors.repository?.type === 'required' && (
            <Typography
              variant='caption'
              className={classes.formValidationError}
              id='required-repo'
            >
              Please enter a solution repository
            </Typography>
          )}

          {/*  this input is invisible, only here for the rating to work in the form */}
          <div
            style={{
              marginTop: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='subtitle1'>Rate this challenge</Typography>
            <Rating
              cy-test="submit-rating-input"
              name='rating'
              onChange={(_, value) => setUserRating(value)}
            />
          </div>
          <input
            name='rating'
            type='number'
            value={userRating}
            ref={register({ required: true, min: '1' })}
            hidden
            readOnly
          />
          {(errors.rating?.type === 'required' ||
            errors.rating?.type === 'min') && (
              <Typography
                variant='caption'
                id='required-rating'
                className={classes.formValidationError}
              >
                Please rate this challenge
              </Typography>
            )}
          <Typography variant='subtitle1' style={{ marginTop: 16 }}>
            Please leave your review here
          </Typography>
          <TextField
            cy-test="submit-title-input"
            label='Title'
            type='text'
            id='commentTitleInput'
            placeholder='Comment Title'
            name='commentTitle'
            inputRef={register({ maxLength: 100 })}
            variant='filled'
          />
          {errors.commentTitle?.type === 'maxLength' && (
            <Typography
              variant='caption'
              className={classes.formValidationError}
            >
              Title should be less than 100 characters
            </Typography>
          )}
          <TextField
            cy-test="submit-content-input"
            id='reviewContentInput'
            label='Message'
            multiline
            rows={4}
            placeholder='Leave your message here'
            name='commentContent'
            inputRef={register({ maxLength: 255 })}
            variant='filled'
            style={{ marginTop: 8 }}
          />
          {errors.commentContent?.type === 'maxLength' && (
            <Typography
              variant='caption'
              className={classes.formValidationError}
            >
              Your message should be less than 100 characters
            </Typography>
          )}

          <Button
            cy-test="submit-review-button"
            variant='contained'
            color='primary'
            type='submit'
            id='submit-form'
            style={{ marginTop: 16 }}
          >
            submit
          </Button>
        </form>

      </div>
    </Modal>
  );
}

export default SubmitModal;
