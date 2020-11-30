import React, { useEffect, useContext, lazy, Suspense } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Logged } from "../../context/LoggedInContext";
import ErrorBoundary from "../../components/ErrorBoundary";
import Loading from "../../components/Loading";
import network from "../../services/network";
import Cookies from "js-cookie";
import SecondHeader from "../../components/Header/SecondHeader";

const GithubTokens = lazy(() => import("./GithhubTokens"));
const SubmissionsByUsers = lazy(() => import("./SubmissionsStatus"));
const ProposedChallenge = lazy(() => import("./ChallengeApproval"));
const UsersControl = lazy(() => import("./UsersControl"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const TeamsControl = lazy(() => import("./TeamsControl"));
const DashBoard = lazy(() => import("./DashBoard"));

function Index({ darkMode }) {
  const location = useHistory();
  const loggedContext = useContext(Logged);

  const checkAdminPermissions = async () => {
    if (Cookies.get("accessToken")) {
      try {
        await network.get("/api/v1/auth/validate-admin");
      } catch (error) {
        Cookies.remove("refreshToken");
        Cookies.remove("accessToken");
        Cookies.remove("name");
        Cookies.remove("userId");
        Cookies.remove("isAdmin");
        Cookies.remove("userName");
        loggedContext.setLogged(false);
        location.push("/");
      }
    } else {
      Cookies.remove("refreshToken");
      Cookies.remove("accessToken");
      Cookies.remove("name");
      Cookies.remove("userId");
      Cookies.remove("isAdmin");
      Cookies.remove("userName");
      loggedContext.setLogged(false);
      location.push("/");
    }
  };

  useEffect(() => {
    checkAdminPermissions();
    // eslint-disable-next-line
  }, []);

  const paths = [
    { name: "DashBoard", URL: "/admin/DashBoard" },
    { name: "Submissions Status", URL: `/admin/SubmissionsStatus` },
    { name: "Challenges Management", URL: "/admin/ChallengesManagement" },
    { name: "Users Control", URL: "/admin/UsersControl" },
    { name: "Githhub Tokens", URL: "/admin/GithhubTokens" },
    { name: "Teams Control", URL: "/admin/TeamsControl" },
  ];
  return (
    <>
      <SecondHeader paths={paths} darkMode={darkMode} />
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/admin/DashBoard">
              <DashBoard darkMode={darkMode} />
            </Route>
            <Route exact path="/admin/SubmissionsStatus">
              <SubmissionsByUsers darkMode={darkMode} />
            </Route>
            <Route exact path="/admin/ChallengesManagement">
              <ProposedChallenge darkMode={darkMode} />
            </Route>
            <Route exact path="/admin/UsersControl">
              <UsersControl darkMode={darkMode} />
            </Route>
            <Route exact path="/admin/GithhubTokens">
              <GithubTokens darkMode={darkMode} />
            </Route>
            <Route exact path="/admin/TeamsControl">
              <TeamsControl darkMode={darkMode} />
            </Route>
            {/* <Route exact path="/admin">
              <AdminLanding />
            </Route> */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default Index;
