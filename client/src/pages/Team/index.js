import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary.js";
import Loading from "../../components/Loading";

const OneTeamPage = lazy(() => import("./OneTeam/TeamInfo"));
const OneTeacherPage = lazy(() => import("./OneTeacher"));
const MyTeams = lazy(() => import("./MyTeams"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const TeamAssignments = lazy(() => import("./OneTeam/TeamAssignments"));

function Index({ darkMode }) {

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/teams/:id">
              <OneTeamPage darkMode={darkMode} />
            </Route>
            <Route exact path="/teams/tasks/:id">
              <TeamAssignments darkMode={darkMode} />
            </Route>
            <Route path="/teams/teacher/:id">
              <OneTeacherPage darkMode={darkMode} />
            </Route>
            <Route path="/teams">
              <MyTeams darkMode={darkMode} />
            </Route>
            <Route path="*">
              <NotFound darkMode={darkMode} />
            </Route>
          </Switch>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default Index;
