import React, {
  useEffect,
  useContext,
  useCallback,
  lazy,
  Suspense,
} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Logged } from '../../../context/LoggedInContext';
import ErrorBoundary from '../../../components/ErrorBoundary';
import Loading from '../../../components/Loading';
import network from '../../../services/network';
import SecondHeader from '../../../components/Header/SecondHeader';

const NotFound = lazy(() => import('../../NotFound'));
const AccessKeyControl = lazy(() => import('./AccessKey/index'));
const ErrorControl = lazy(() => import('./ErrorControl/index'));
const EventsControl = lazy(() => import('./EventsControl/index'));
const TeamsControl = lazy(() => import('./TeamsControl/index'));

const paths = [
  { name: 'Access Key Control', URL: '/admin/Webhook/AccessKey' },
  { name: 'Errors Control', URL: '/admin/Webhook/Errors' },
  { name: 'Events Control', URL: '/admin/Webhook/Events' },
  { name: 'Teams Control', URL: '/admin/Webhook/Teams' },
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
      <SecondHeader paths={paths} position="true" />
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/admin/Webhook/AccessKey">
              <AccessKeyControl />
            </Route>
            <Route path="/admin/Webhook/Errors">
              <ErrorControl />
            </Route>
            <Route path="/admin/Webhook/Events">
              <EventsControl />
            </Route>
            <Route path="/admin/Webhook/Teams">
              <TeamsControl />
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
