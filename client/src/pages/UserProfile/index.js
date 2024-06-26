import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary';
import Loading from '../../components/Loading';
import SecondHeader from '../../components/Header/SecondHeader';

const UserInfo = lazy(() => import('./PersonalDetails'));
const MyChallenges = lazy(() => import('./MyChallenges'));
const NotFound = lazy(() => import('../NotFound'));

const paths = [
  { name: 'Profile Info', URL: '/profile/info' },
  { name: 'My Challenges', URL: '/profile/MyChallenges' },
];

function Index() {
  return (
    <div>
      <SecondHeader paths={paths} />
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/profile/MyChallenges">
              <MyChallenges />
            </Route>
            <Route path="/profile/info">
              <UserInfo />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default Index;
