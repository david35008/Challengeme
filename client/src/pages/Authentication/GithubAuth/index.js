import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import GitHubIcon from '@material-ui/icons/GitHub';
import network from '../../../services/network';
import { Logged } from '../../../context/LoggedInContext';
import '../../../styles/githubAuth.css';

function GithubAuth() {
  const navigate = useNavigate();
  const url = useLocation();
  const query = new URLSearchParams(url.search);
  const code = query.get('code');
  const LoggedContext = useContext(Logged);

  const loginSeason = async () => {
    try {
      const { data: response } = await network.post(
        '/api/v1/auth/authentication-with-github',
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
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Github Authentication failed',
      });
    }
  };

  useEffect(() => {
    loginSeason();
    // eslint-disable-next-line
  }, [history, code]);

  return (
    <div className="sign-in-github-row">
      <div className="sign-in-github-column">
        <GitHubIcon className="sign-in-github-icon" />
        <section className="sign-in-github-content">
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

export default GithubAuth;
