import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import { CircularProgress } from '@material-ui/core';
import { motion } from 'framer-motion';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Security from './Security';
import Extras from './Extras';
import network from '../../../services/network';
import Stepper from './Stepper';
import Background from '../../Background';
import '../../../styles/Register.css';

const useStyles = makeStyles(() => ({
  nextButton: {
    background: 'linear-gradient(45deg, #447CC6 30%, #315CAB 90%)',
    color: 'white',
  },
}));

function Register() {
  const classes = useStyles();
  const [errors, setErrors] = useState([]);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [signUpReason, setSignUpReason] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const nextStep = async () => {
    // eslint-disable-next-line
    const validateEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const githubAccountRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    const onlyLettersAndSpacesRegex = /^[a-zA-Z\s]*$/;
    const onlyLettersAndNumbersRegex = /^[a-zA-Z0-9]*$/;
    // eslint-disable-next-line
    const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const noSpecialLetters = /[^a-zA-Z\d\s]/;

    const tempErrs = [];
    if (step === 1) {
      if (
        firstName !== ''
        && (firstName.length < 1 || !onlyLettersAndSpacesRegex.test(firstName))
      ) {
        tempErrs.push({
          field: 'firstName',
          message: 'First name must contain only letters.',
        });
      }
      if (
        lastName !== ''
        && (lastName.length < 1 || !onlyLettersAndSpacesRegex.test(lastName))
      ) {
        tempErrs.push({
          field: 'lastName',
          message: 'Last name must contain only letters.',
        });
      }
      if (userName.length < 1 || !onlyLettersAndNumbersRegex.test(userName)) {
        tempErrs.push({
          field: 'userName',
          message: 'Username must contain only letters and numbers.',
        });
      }
      if (userName.length > 32) {
        tempErrs.push({
          field: 'userName',
          message: 'Username to long.',
        });
      }
      try {
        await network.post('/api/v1/auth/user-exist', {
          userName,
        });
      } catch (e) {
        if (e.response.status === 409) {
          tempErrs.push({
            field: 'userName',
            message: 'Username already exists.',
          });
        }
      }
      if (email.length < 1) tempErrs.push({ field: 'email', message: 'Email required.' });
      if (!validateEmailRegex.test(email)) tempErrs.push({ field: 'email', message: 'Email invalid.' });
    } else if (step === 2) {
      if (
        country !== ''
        && (country.length < 1 || !onlyLettersAndSpacesRegex.test(country))
      ) {
        tempErrs.push({
          field: 'country',
          message: 'Country must contain only letters',
        });
      }
      if (
        city !== ''
        && (city.length < 1 || !onlyLettersAndSpacesRegex.test(city))
      ) {
        tempErrs.push({
          field: 'city',
          message: 'City must contain only letters',
        });
      }
      if (birthDate !== '' && birthDate.length < 1) {
        tempErrs.push({
          field: 'birthDate',
          message: 'Birth date required',
        });
      }
      if (
        birthDate !== ''
        && new Date(birthDate).valueOf() > new Date().valueOf()
      ) {
        tempErrs.push({
          field: 'birthDate',
          message: 'Birth date must be in the past.',
        });
      }
      if (
        phoneNumber !== ''
        && (phoneNumber.length < 1 || !phoneNumberRegex.test(phoneNumber))
      ) {
        tempErrs.push({
          field: 'phoneNumber',
          message: 'Invalid phone number',
        });
      }
    } else if (step === 3) {
      if (password.length < 8) {
        tempErrs.push({
          field: 'password',
          message: 'Password needs to be at least 8 characters.',
        });
      }
      if (password !== confirmPassword) {
        tempErrs.push({
          field: 'confirmPassword',
          message: 'Passwords must be identical.',
        });
      }
      if (securityQuestion === '') {
        tempErrs.push({
          field: 'securityQuestion',
          message: 'Security question must be chosen.',
        });
      }
      if (securityAnswer.length < 8) {
        tempErrs.push({
          field: 'securityAnswer',
          message: 'Security answer should be at least 8 characters.',
        });
      }
      if (noSpecialLetters.test(securityAnswer)) {
        tempErrs.push({
          field: 'securityAnswer',
          message: 'Security answer cant contain special characters.',
        });
      }
    } else if (step === 4) {
      if (
        gitHub !== ''
        && (gitHub.length < 1 || !githubAccountRegex.test(gitHub))
      ) {
        tempErrs.push({
          field: 'gitHub',
          message: 'GitHub account is invalid.',
        });
      }
      if (tempErrs.length === 0) {
        setErrors([]);
        try {
          setLoading(true);
          await network.post('/api/v1/auth/register', {
            firstName,
            lastName,
            userName,
            email,
            password,
            birthDate,
            country,
            city,
            phoneNumber,
            githubAccount: gitHub,
            reasonOfRegistration: signUpReason,
            securityQuestion,
            securityAnswer,
          });
          mixpanel.track('User Finished Registertion');
          setLoading(false);
        } catch (error) {
          tempErrs.push({
            field: 'server',
            message: error.response.data.message,
          });
          setLoading(false);
          setStep(1);
        }
      }
    } else if (step === 5) {
      navigate('/login');
      return;
    }
    if (tempErrs.length === 0) {
      setStep(step + 1);
      setErrors([]);
    } else {
      setErrors(tempErrs);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setErrors([]);
  };

  const handleChange = (input) => (e) => {
    switch (input) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'userName':
        setUserName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        break;
      case 'birthDate':
        setBirthDate(e.target.value);
        break;
      case 'country':
        setCountry(e.target.value);
        break;
      case 'city':
        setCity(e.target.value);
        break;
      case 'phoneNumber':
        setPhoneNumber(e.target.value);
        break;
      case 'signUpReason':
        setSignUpReason(e.target.value);
        break;
      case 'gitHub':
        setGitHub(e.target.value);
        break;
      case 'securityQuestion':
        setSecurityQuestion(e.target.value);
        break;
      case 'securityAnswer':
        setSecurityAnswer(e.target.value);
        break;
      default:
        break;
    }
  };

  const values = {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
    birthDate,
    country,
    city,
    phoneNumber,
    signUpReason,
    gitHub,
    securityQuestion,
    securityAnswer,
  };

  const multiForm = () => {
    switch (step) {
      case 1:
        mixpanel.track('User On Register Page 1');
        return (
          <UserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 2:
        mixpanel.track('User On Register Page 2');
        return (
          <PersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3:
        mixpanel.track('User On Register Page 3');
        return <Security handleChange={handleChange} values={values} />;
      case 4:
        mixpanel.track('User On Register Page 4');
        return <Extras handleChange={handleChange} values={values} />;
      case 5:
        mixpanel.track('User On Register Page 5');
        return <Confirm email={email} />;
      default:
        return (
          <UserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
    }
  };

  return (
    <>
      <Background />
      <motion.div
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: { duration: 0.2 },
        }}
        className="registerGeneral"
      >
        <div className="containerHeaderRegister">
          <div className="registerHeader">
            <div className="registerTitle">
              <b>Register</b>
            </div>
            <Stepper activeStep={step} />
          </div>
        </div>
        <div className="registerBody">
          {multiForm()}
          {errors.length !== 0 && (
            <div className="containerErrorRegister">
              <ErrorIcon
                style={{
                  color: 'white',
                  marginLeft: '4px',
                }}
              />
              <div className="errorInputRegister">{errors[0].message}</div>
            </div>
          )}
          {loading && <CircularProgress />}
          <div className="containerSecondPartRegister">
            {step !== 5 ? (
              <>
                <div className="containerButtonsRegister">
                  {step > 1 && <Button onClick={prevStep}>Back</Button>}
                  <Button
                    id="nextButton"
                    className={classes.nextButton}
                    variant="contained"
                    onClick={nextStep}
                  >
                    {step === 4 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </>
            ) : (
              <div className="containerButtonsRegister">
                {step > 1 && (
                  <Button id="prevButton" onClick={prevStep}>
                    Back
                  </Button>
                )}
                <Button
                  id="nextButton"
                  className={classes.nextButton}
                  variant="contained"
                  onClick={nextStep}
                >
                  Back To Login Page
                </Button>
              </div>
            )}
            {/* {step === 2 && (
              <div className="containerButtonsRegister">
                <Button
                  id="nextButton"
                  className={classes.nextButton}
                  variant="contained"
                  onClick={nextStep}
                >
                  skip
                </Button>
              </div>
            )} */}
            <p>
              Have an existing account?
              {' '}
              <Link to="/login">Login Here</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Register;
