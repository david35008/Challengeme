import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import PeopleIcon from '@mui/icons-material/People';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import GitHubIcon from '@mui/icons-material/GitHub';
import ErrorIcon from '@mui/icons-material/Error';
import { motion } from 'framer-motion';
import GoogleIcon from '../../images/reactSvg/GoogleIcon';
import { Logged } from '../../context/LoggedInContext';
import network from '../../services/network';
import '../../styles/Login.css';

export default function Login() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const LoggedContext = useContext(Logged);

  useEffect(() => {
    mixpanel.track('User On Login Page');
    // Prevent special password eye bugs
    document.addEventListener('mouseup', () => {
      setShowPassword(false);
    });
    document.addEventListener('dragend', () => {
      setShowPassword(false);
    });
  }, []);

  const loginFunc = async (e) => {
    const formErrors = {};
    e.preventDefault();
    if (/\W/.test(userName)) {
      formErrors.userName = 'invalid userName';
    }
    if (userName.length < 1 || userName.length > 32) {
      formErrors.userName = 'userName must be 1-32 characters long';
    }

    if (password.length < 8) {
      formErrors.password = 'password must be at least 8 characters long';
    }
    if (formErrors.password || formErrors.userName) {
      setError(formErrors);
      return;
    }
    // request to server
    try {
      const { data } = await network.post('/api/v1/auth/login', {
        userName,
        password,
        rememberMe,
      });
      LoggedContext.setLogged(true);
      LoggedContext.setIsAdmin(data.isAdmin);
      mixpanel.track('User Logged In', {
        User: `${data.userName}`,
        'Remember Me': `${rememberMe}`,
      });
      navigate('/');
    } catch (error) {
      setError({ message: error.response.data.message });
    }
  };

  const authGithub = async () => {
    try {
      const { data } = await network.get('/api/v1/auth/client-id-github');
      window.location.assign(
        `https://github.com/login/oauth/authorize?client_id=${data.clientId}`,
      );
    } catch (error) {
      setError({ message: error.message });
    }
  };

  const googleAuth = async () => {
    try {
      const { data } = await network.get('/api/v1/auth/client-id-google');
      const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
      const params = {
        client_id: data.clientId,
        scope: 'https://www.googleapis.com/auth/userinfo.email',
        include_granted_scopes: true,
        response_type: 'token',
        redirect_uri: `http://${window.location.host}/google-auth`,
      };
      window.location.assign(
        `${url}?${new URLSearchParams(params).toString()}`,
      );
    } catch (error) {
      setError({ message: error.message });
    }
  };

  return (
    <>
      <motion.div
        onMouseUp={() => setShowPassword(false)}
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: { duration: 0.2 },
        }}
        className="loginGeneral"
      >
        <div className="containerBodyLogin">
          <div className="containerHeaderLogin">
            <b className="loginTitle">Log in</b>
          </div>
          <div className="loginForm">
            <div className="loginBody">
              <form className="formBody" onSubmit={loginFunc}>
                <FormControl className="userNameLoginInput">
                  <InputLabel style={{ color: 'grey' }}>User Name</InputLabel>
                  <Input
                    type="text"
                    id="userNameField"
                    name="userName"
                    value={userName}
                    required
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    endAdornment={(
                      <InputAdornment style={{ opacity: '0.7' }} position="end">
                        <PeopleIcon />
                      </InputAdornment>
                    )}
                  />
                </FormControl>
                <FormControl className="passwordLoginINput">
                  <InputLabel style={{ color: 'grey' }}>Password</InputLabel>
                  <Input
                    id="passwordField"
                    name="password"
                    value={password}
                    required
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    endAdornment={(
                      <InputAdornment position="end">
                        <IconButton
                          id="reveal"
                          style={{ opacity: '0.7' }}
                          aria-label="toggle password visibility"
                          onMouseDown={() => setShowPassword(true)}
                          onMouseUp={() => setShowPassword(false)}
                          autoComplete="current-password"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        <LockIcon style={{ opacity: '0.7' }} />
                      </InputAdornment>
                    )}
                  />
                </FormControl>
                <div className="RememberAndforgot">
                  <FormControlLabel
                    htmlFor="rememberMe"
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                    labelPlacement="end"
                    name="rememberMe"
                    type="checkbox"
                    onChange={() => setRememberMe((prevState) => !prevState)}
                  />
                  <Link to="/forgot" className="forgotLabel">
                    Forgot Password ?
                  </Link>
                </div>
                {(error.userName || error.password || error.message) && (
                  <div className="containerErrorLogin">
                    <ErrorIcon
                      style={{
                        color: 'white',
                        marginLeft: '4px',
                      }}
                    />
                    <div className="errorInput">
                      {error.userName || error.password || error.message}
                    </div>
                  </div>
                )}
                <div className="login-register-line">
                  <Button
                    type="submit"
                    id="loginButton"
                    className="loginButton"
                  >
                    Log in
                  </Button>
                  <span>don`t have an account yet?</span>
                  <Link to="/register" id="signUp">
                    Sign up
                  </Link>
                </div>
              </form>
              <section className="login-with-third-party">
                <Button onClick={authGithub} variant="outlined">
                  Login with Github
                  <GitHubIcon className="or-login-with-icon" />
                </Button>
                <Button onClick={googleAuth} variant="outlined">
                  <div>Login with Google</div>
                  <div className="or-login-with-icon">
                    <GoogleIcon />
                  </div>
                </Button>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
