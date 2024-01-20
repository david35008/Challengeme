import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary.js';
import Loading from '../../components/Loading';

const OneTeamPage = lazy(() => import('./OneTeam/TeamInfo'));
const OneTeacherPage = lazy(() => import('./OneTeacher'));
const MyTeams = lazy(() => import('./MyTeams'));
const NotFound = lazy(() => import('../NotFound'));
const TeamAssignments = lazy(() => import('./OneTeam/TeamAssignments'));

function Index() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/teams/:id">
              <OneTeamPage />
            </Route>
            <Route path="/teams/tasks/:id">
              <TeamAssignments />
            </Route>
            <Route path="/teams/teacher/:id">
              <OneTeacherPage />
            </Route>
            <Route path="/teams">
              <MyTeams />
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
