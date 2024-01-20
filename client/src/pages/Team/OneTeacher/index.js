import React, {
  lazy, Suspense, useState, useEffect, useCallback,
} from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ErrorBoundary from '../../../components/ErrorBoundary.js';
import Loading from '../../../components/Loading';
import SecondHeader from '../../../components/Header/SecondHeader';
import network from '../../../services/network';

const NotFound = lazy(() => import('../../NotFound'));
const DashBoard = lazy(() => import('./DashBoard'));
const TeamControl = lazy(() => import('./TeamControl/index'));
const SubmissionsStatus = lazy(() => import('./SubmissionsStatus'));
const Assignments = lazy(() => import('./Assignments'));

function Index() {
  const { id } = useParams();
  const [teamName, setTeamName] = useState();
  const [loading, setLoading] = useState(true);

  const getTeamNameFromDb = useCallback(async () => {
    try {
      const { data: teamNameFromDb } = await network.get(
        `/api/v1/teams/team-name/${id}`,
      );
      setTeamName(teamNameFromDb.name);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    getTeamNameFromDb();
    // eslint-disable-next-line
  }, [id]);

  const paths = [
    { name: 'DashBoard', URL: `/teams/teacher/${id}` },
    { name: 'Team Control', URL: `/teams/teacher/${id}/TeamControl` },
    {
      name: 'Submissions Status',
      URL: `/teams/teacher/${id}/SubmissionsStatus`,
    },
    { name: 'Assignments', URL: `/teams/teacher/${id}/Assignments` },
  ];

  return !loading ? (
    teamName ? (
      <div>
        <SecondHeader paths={paths} />
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Routes>
              <Route path="/teams/teacher/:id/TeamControl">
                <TeamControl teamName={teamName} />
              </Route>
              <Route path="/teams/teacher/:id/SubmissionsStatus">
                <SubmissionsStatus teamName={teamName} />
              </Route>
              <Route path="/teams/teacher/:id/Assignments">
                <Assignments teamName={teamName} />
              </Route>
              <Route path="/teams/teacher/:id">
                <DashBoard teamName={teamName} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </div>
    ) : (
      <NotFound />
    )
  ) : (
    <Loading />
  );
}

export default Index;
