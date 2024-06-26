import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleIcon from '../images/reactSvg/GoogleIcon';
import network from './network';
import { Logged } from '../context/LoggedInContext';
import '../styles/googleAuth.css';

function GoogleAuth() {
  const navigate = useNavigate();
  const url = useLocation();
  const query = new URLSearchParams(url.hash.slice(1));
  const code = query.get('access_token');
  const LoggedContext = useContext(Logged);

  const loginSeason = async () => {
    try {
      const { data: response } = await network.post(
        '/api/v1/auth/authentication-with-google',
        { code },
      );
      LoggedContext.setLogged(true);
      LoggedContext.setIsAdmin(response.isAdmin);
      navigate('/');
      Swal.fire({
        icon: 'success',
        title: response.title,
        text: response.message,
        cancelButtonText: 'OK',
      });
    } catch (error) {
      navigate('/login');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Google Authentication failed',
      });
    }
  };

  useEffect(() => {
    loginSeason();
    // eslint-disable-next-line
  }, [navigate, code]);

  return (
    <div className="sign-in-google-row">
      <div className="sign-in-google-column">
        <div className="sign-in-google-icon">
          <GoogleIcon />
        </div>
        <section className="sign-in-google-content">
          <h1>Checking your account before accessing ChallengeMe.</h1>
          <p>
            This process is automatic. Your browser will redirect to your
            requested shortly.
          </p>
          <p>please allow up to 5 seconds...</p>
        </section>
      </div>
    </div>
  );
}

export default GoogleAuth;
