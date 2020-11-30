import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Logged } from "../context/LoggedInContext";
import AllChallenges from "../context/AllChallengesContext";
import FilteredLabels from "../context/FilteredLabelsContext";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Cookies from "js-cookie";
import Forgot from "./Authentication/ForgotPasswordPage";
import ValidatingMail from "./Authentication/Register/ValidatingMail";
import network from "../services/network";
import Landing from "./Authentication";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import ErrorBoundary from "../components/ErrorBoundary";
import Loading from "../components/Loading";
import "../index.css";
import NewChallengeForm from "./NewChallenge";
import UserProfile from "./UserProfile";
import Admin from "./Admin";
import Team from "./Team";

const NotFound = lazy(() => import("../pages/NotFound"));
const Home = lazy(() => import("./Home"));
const ChallengePage = lazy(() => import("./OneChallenge"));

export default function Router() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [logged, setLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [challenges, setChallenges] = useState([]);
  const [filteredLabels, setFilteredLabels] = useState([]);

  useEffect(() => {
    if (logged) {
      const previousTheme = localStorage.getItem("darkMode"); //get previous selected theme
      if (Cookies.get("isAdmin") === "admin") {
        setIsAdmin(true);
      }

      if (previousTheme === "false") {
        setDarkTheme(false);
      } else if (previousTheme === "true") {
        setDarkTheme(true);
      } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          //check default theme of the user
          setDarkTheme(true);
        }
      }
    }
    (async () => {
      try {
        const { data: challengesFromServer } = await network.get("/api/v1/challenges");
        typeof challengesFromServer === "object" && setChallenges(challengesFromServer);
      } catch {}
    })();
  }, [logged]);

  useEffect(() => {
    // auth
    (async () => {
      if (Cookies.get("accessToken")) {
        try {
          const { data } = await network.get("/api/v1/auth/validate-token");
          setLogged(data);
          setLoading(false);
        } catch (e) {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      {!loading ? (
        !logged ? (
          <Logged.Provider value={{ logged, setLogged }}>
            <AnimatePresence>
              <ErrorBoundary>
                <Route
                  render={({ location }) => (
                    <Switch location={location} key={location.pathname}>
                      <Route exact path="/register">
                        <Register />
                      </Route>
                      <Route exact path="/login">
                        <Login />
                      </Route>
                      <Route exact path="/forgot">
                        <Forgot />
                      </Route>
                      <Route exact path="/auth">
                        <ValidatingMail />
                      </Route>
                      <Route exact path="/">
                        <Landing />
                      </Route>
                      <Route path="*">
                        <Redirect to="/" />
                      </Route>
                    </Switch>
                  )}
                />
              </ErrorBoundary>
            </AnimatePresence>
          </Logged.Provider>
        ) : (
          <Logged.Provider value={{ logged, setLogged }}>
            <AllChallenges.Provider value={{ challenges, setChallenges }}>
              <FilteredLabels.Provider value={{ filteredLabels, setFilteredLabels }}>
                <Header darkMode={darkTheme} setDarkMode={setDarkTheme} />
                <div className={darkTheme ? "dark" : "light"}>
                  <Suspense fallback={<Loading darkMode={darkTheme} />}>
                    <ErrorBoundary>
                      <Switch>
                        <Route exact path="/challenges/:id">
                          <ChallengePage darkMode={darkTheme} />
                        </Route>
                        <Route path="/profile">
                          <UserProfile darkMode={darkTheme} />
                        </Route>
                        <Route exact path="/addnewchallenge">
                          <NewChallengeForm />
                        </Route>
                        <Route path="/teams">
                          <Team darkMode={darkTheme} />
                        </Route>
                        {isAdmin && (
                          <Route path="/admin">
                            <Admin darkMode={darkTheme} />
                          </Route>
                        )}
                        <Route exact path="/">
                          <Home />
                        </Route>
                        <Route path="*">
                          <NotFound />
                        </Route>
                      </Switch>
                    </ErrorBoundary>
                  </Suspense>
                </div>
              </FilteredLabels.Provider>
            </AllChallenges.Provider>
          </Logged.Provider>
        )
      ) : (
        <Loading firstLoading={true} />
      )}
    </BrowserRouter>
  );
}
