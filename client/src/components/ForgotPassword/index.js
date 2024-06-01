import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ErrorIcon from '@mui/icons-material/Error';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import Background from '../../pages/Background';
import network from '../../services/network';
import Identify from './Identify';
import Change from './Change';
import Security from './Security';
import '../../styles/Forgot.css';

const useStyles = makeStyles(() => ({
  nextButtonForgotPass: {
    marginBottom: '10px',
    background: 'linear-gradient(45deg, #447CC6 30%, #315CAB 90%)',
    color: 'white',
  },
}));

export default function Forgot() {
  const classes = useStyles();

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const [secQuestion, setSecQuestion] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [secAnswer, setSecAnswer] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    mixpanel.track('User On Forgot Password Page');
  }, []);

  const handleChange = useCallback(
    (field) => (e) => {
      switch (field) {
        case 'userName':
          setUserName(e.target.value);
          break;
        case 'answer':
          setSecAnswer(e.target.value);
          break;
        case 'newP':
          setPassword(e.target.value);
          break;
        case 'confirmP':
          setConfirmPassword(e.target.value);
          break;
        default:
          break;
      }
      // eslint-disable-next-line
    },
    [],
  );

  const getQuestion = useCallback(async (userNameForQuestion) => {
    if (
      userNameForQuestion.length < 1
      || userNameForQuestion.length > 32
      || /\W/.test(userNameForQuestion)
    ) {
      setError('Please enter a valid username');
      return;
    }
    try {
      const { data: response } = await network.post(
        '/api/v1/auth/get-question',
        {
          userName: userNameForQuestion,
        },
      );
      setSecQuestion(response.securityQuestion);
      setStep(2);
    } catch (e) {
      setError(e.response.data.message);
    }
    // eslint-disable-next-line
  }, []);

  const validateAnswer = useCallback(
    async (userNameForValidateAnswer, securityAnswer) => {
      if (!securityAnswer) {
        setError('Please type your anwer');
        return;
      }
      if (securityAnswer.length < 8) {
        setError('Answer should be longer');
        return;
      }
      if (securityAnswer.match(/[^a-zA-Z\d\s]/)) {
        setError('Answer can not contain special characters');
        return;
      }
      try {
        const { data: response } = await network.post(
          '/api/v1/auth/validate-answer',
          {
            userName: userNameForValidateAnswer,
            securityAnswer,
          },
        );
        setResetToken(response.resetToken);
        setStep(3);
      } catch (e) {
        setError(e.response.data.message);
      }
      // eslint-disable-next-line
    },
    [],
  );

  const resetPassword = useCallback(
    async (passwordForReset, confirmPasswordForReset, resetTokenForReset) => {
      if (passwordForReset.length < 8) {
        setError('password should be at least 8 characters');
        return;
      }
      if (passwordForReset !== confirmPasswordForReset) {
        setError('passwords do not match');
        return;
      }
      try {
        const { data: response } = await network.patch(
          '/api/v1/auth/password-update',
          {
            password: passwordForReset,
            resetToken: resetTokenForReset,
          },
        );
        Swal.fire({
          icon: 'success',
          text: response.message,
        }).then(() => {
          navigate('/login');
        });
      } catch (e) {
        setError(e.response.data.message);
      }
      // eslint-disable-next-line
    },
    [],
  );

  const nextStep = useCallback(() => {
    setError('');
    switch (step) {
      case 1:
        getQuestion(userName);
        break;
      case 2:
        validateAnswer(userName, secAnswer);
        break;
      case 3:
        resetPassword(password, confirmPassword, resetToken);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [step, userName, password, confirmPassword, secAnswer]);

  const multiForm = useCallback(() => {
    switch (step) {
      case 1:
        return <Identify data={{ userName }} handleChange={handleChange} />;
      case 2:
        mixpanel.track('User On Forgot Password Page 2', {
          User: `${userName}`,
          Description: 'user tried to get Security Question',
        });
        return (
          <Security
            data={{ secQuestion, secAnswer }}
            handleChange={handleChange}
          />
        );
      case 3:
        mixpanel.track('User On Forgot Password Page 3', {
          User: `${userName}`,
          Description: 'user tried to Submit Security Answer',
        });
        return (
          <Change
            data={{ password, confirmPassword }}
            handleChange={handleChange}
          />
        );
      default:
        return <></>;
    }
    // eslint-disable-next-line
  }, [step, userName, password, confirmPassword, secQuestion, secAnswer]);

  return (
    <>
      <Background />
      <motion.div
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: { duration: 0.2 },
        }}
        className="forgotPassGeneral"
      >
        <div className="containerHeaderForgotPass">
          <div className="forgotPassHeader">
            <div className="forgotPassTitle">
              <b>Forgot Password</b>
            </div>
          </div>
        </div>
        <div className="ForgotPassBody">
          {multiForm()}
          {error !== '' && (
            <motion.div className="containerErrorForgotPass">
              <ErrorIcon
                style={{
                  color: 'white',
                  marginLeft: '4px',
                }}
              />
              <div className="errorInputForgotPass">{error}</div>
            </motion.div>
          )}
          <div className="containerButtonsForgotPass">
            <Button
              id="nextButton"
              className={classes.nextButtonForgotPass}
              variant="contained"
              onClick={nextStep}
            >
              next
            </Button>
            <Link to="/login">Login Here</Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
