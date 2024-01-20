import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Logged } from '../context/LoggedInContext';
import AllChallenges from '../context/AllChallengesContext';
import FilteredLabels from '../context/FilteredLabelsContext';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import Forgot from '../components/ForgotPassword';
import ValidatingMail from './Authentication/Register/ValidatingMail';
import GithubAuth from './Authentication/GithubAuth';
import GoogleAuth from '../services/GoogleAuth';
import network from '../services/network';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';
import NewChallengeForm from './NewChallenge';
import UserProfile from './UserProfile';
import Admin from './Admin';
import Team from './Team';
import PrivateRoute from '../Routes/privateRoute';
import PublicRoute from '../Routes/publicRoute';
import '../styles/Admin.css';

const NotFound = lazy(() => import('./NotFound'));
const ChallengesPage = lazy(() => import('./Challenges'));
const LandingPage = lazy(() => import('./LandingPage'));
const ChallengePage = lazy(() => import('./OneChallenge'));

export default function Router() {
  const [logged, setLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [challenges, setChallenges] = useState([]);
  const [filteredLabels, setFilteredLabels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: challengesFromServer } =
          await network.get('/api/v1/challenges');
        setChallenges(challengesFromServer);
      } catch {}
    })();
  }, [logged]);

  useEffect(() => {
    // auth
    (async () => {
      try {
        if (Cookies.get('accessToken')) {
          const { data } = await network.get('/api/v1/auth/validate-token');
          setLogged(data);
          setIsAdmin(data.isAdmin);
          setLoading(false);
        } else if (Cookies.get('refreshToken')) {
          await network.post('/api/v1/auth/token', {
            token: Cookies.get('refreshToken'),
          });
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      {!loading ? (
        <Logged.Provider value={{ logged, isAdmin, setLogged, setIsAdmin }}>
          <AllChallenges.Provider value={{ challenges, setChallenges }}>
            <FilteredLabels.Provider
              value={{ filteredLabels, setFilteredLabels }}
            >
              <Header />
              <div className="light">
                <Suspense fallback={<Loading />}>
                  <ErrorBoundary>
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/challenges" element={<ChallengesPage />} />
                      <Route
                        path="/challenges/:id"
                        element={<ChallengePage />}
                      />
                      <Route
                        path="/register"
                        element={<PublicRoute component={Register} />}
                      />
                      <Route
                        path="/login"
                        element={<PublicRoute component={Login} />}
                      />
                      <Route
                        path="/forgot"
                        element={<PublicRoute component={Forgot} />}
                      />
                      <Route
                        path="/auth"
                        element={<PublicRoute component={ValidatingMail} />}
                      />
                      <Route
                        path="/github-auth"
                        element={<PublicRoute component={GithubAuth} />}
                      />
                      <Route
                        path="/google-auth"
                        element={<PublicRoute component={GoogleAuth} />}
                      />
                      <Route
                        path="/addnewchallenge"
                        element={<PrivateRoute component={NewChallengeForm} />}
                      />
                      <Route
                        path="/profile"
                        element={<PrivateRoute component={UserProfile} />}
                      />
                      <Route
                        path="/teams"
                        element={<PrivateRoute component={Team} />}
                      />
                      {isAdmin && (
                        <Route
                          path="/admin"
                          element={<PrivateRoute component={Admin} />}
                        />
                      )}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </ErrorBoundary>
                </Suspense>
              </div>
            </FilteredLabels.Provider>
          </AllChallenges.Provider>
        </Logged.Provider>
      ) : (
        <Loading firstLoading />
      )}
    </BrowserRouter>
  );
}
