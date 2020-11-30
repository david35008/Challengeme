import React, { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import ErrorBoundary from "../../../components/ErrorBoundary.js";
import Loading from "../../../components/Loading";
import SecondHeader from '../../../components/Header/SecondHeader';
import network from '../../../services/network';

const NotFound = lazy(() => import("../../NotFound"));
const DashBoard = lazy(() => import("./DashBoard"));
const TeamControl = lazy(() => import("./TeamControl/index"));
const SubmissionsStatus = lazy(() => import("./SubmissionsStatus"));
const Assignments = lazy(() => import("./Assignments"));

function Index({ darkMode }) {

    const { id } = useParams();
    const [teamName, setTeamName] = useState('')

    const getTeamNameFromDb = async () => {
        try {
            const { data: teamNameFromDb } = await network.get(`/api/v1/teams/team-name/${id}`);
            setTeamName(teamNameFromDb.name);
        } catch (error) {
            }
    }

    useEffect(() => {
        getTeamNameFromDb();
        // eslint-disable-next-line
    }, [id])

    const paths = [
        { name: "DashBoard", URL: `/teams/teacher/${id}` },
        { name: "Team Control", URL: `/teams/teacher/${id}/TeamControl` },
        { name: "Submissions Status", URL: `/teams/teacher/${id}/SubmissionsStatus` },
        { name: "Assignments", URL: `/teams/teacher/${id}/Assignments` },
    ];

    return (
        <div>
            <SecondHeader paths={paths} darkMode={darkMode} />
            <Suspense fallback={<Loading />}>
                <ErrorBoundary>
                    <Switch>
                        <Route exact path="/teams/teacher/:id/TeamControl">
                            <TeamControl darkMode={darkMode} teamName={teamName} />
                        </Route>
                        <Route exact path="/teams/teacher/:id/SubmissionsStatus">
                            <SubmissionsStatus darkMode={darkMode} teamName={teamName} />
                        </Route>
                        <Route exact path="/teams/teacher/:id/Assignments">
                            <Assignments darkMode={darkMode} teamName={teamName} />
                        </Route>
                        <Route exact path="/teams/teacher/:id">
                            <DashBoard darkMode={darkMode} teamName={teamName} />
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
