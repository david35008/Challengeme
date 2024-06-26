import React, {
  useEffect,
  useContext,
  useCallback,
  lazy,
  Suspense,
} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Logged } from '../../context/LoggedInContext';
import ErrorBoundary from '../../components/ErrorBoundary';
import Loading from '../../components/Loading';
import network from '../../services/network';
import SecondHeader from '../../components/Header/SecondHeader';

const GithubTokens = lazy(() => import('./GithhubTokens'));
const SubmissionsByUsers = lazy(() => import('./SubmissionsStatus'));
const ProposedChallenge = lazy(() => import('./ChallengeApproval'));
const UsersControl = lazy(() => import('../../components/Tables/UsersControl'));
// const UsersControl = lazy(() => import("./UsersControl"));
const NotFound = lazy(() => import('../NotFound'));
const TeamsControl = lazy(() => import('./TeamsControl'));
const DashBoard = lazy(() => import('./DashBoard'));
const Webhook = lazy(() => import('./Webhook'));
const MixpanelDashBoard = lazy(() => import('./Mixpanel/DashBoard'));

const paths = [
  { name: 'DashBoard', URL: '/admin/DashBoard' },
  { name: 'Submissions Status', URL: '/admin/SubmissionsStatus' },
  { name: 'Challenges Management', URL: '/admin/ChallengesManagement' },
  { name: 'Users Control', URL: '/admin/UsersControl' },
  { name: 'Githhub Tokens', URL: '/admin/GithhubTokens' },
  { name: 'Teams Control', URL: '/admin/TeamsControl' },
  { name: 'Webhook Control', URL: '/admin/Webhook/AccessKey' },
  { name: 'Mixpanel', URL: '/admin/Mixpanel' },
];

function Index() {
  const navigate = useNavigate();
  const loggedContext = useContext(Logged);

  const checkAdminPermissions = useCallback(async () => {
    if (Cookies.get('accessToken')) {
      try {
        await network.get('/api/v1/auth/validate-admin');
      } catch (error) {
        Cookies.remove('refreshToken');
        Cookies.remove('accessToken');
        Cookies.remove('name');
        Cookies.remove('userId');
        Cookies.remove('isAdmin');
        Cookies.remove('userName');
        loggedContext.setLogged(false);
        navigate('/');
      }
    } else {
      Cookies.remove('refreshToken');
      Cookies.remove('accessToken');
      Cookies.remove('name');
      Cookies.remove('userId');
      Cookies.remove('isAdmin');
      Cookies.remove('userName');
      loggedContext.setLogged(false);
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    checkAdminPermissions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <SecondHeader paths={paths} />
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/admin/DashBoard">
              <DashBoard />
            </Route>
            <Route path="/admin/SubmissionsStatus">
              <SubmissionsByUsers />
            </Route>
            <Route path="/admin/ChallengesManagement">
              <ProposedChallenge />
            </Route>
            <Route path="/admin/UsersControl">
              <UsersControl />
            </Route>
            <Route path="/admin/GithhubTokens">
              <GithubTokens />
            </Route>
            <Route path="/admin/TeamsControl">
              <TeamsControl />
            </Route>
            <Route path="/admin/Webhook">
              <Webhook />
            </Route>
            <Route path="/admin/Mixpanel">
              <MixpanelDashBoard />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default Index;
