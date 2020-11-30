import React, { useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../../components/Loading";
import NotFound from "../../../NotFound";
import network from "../../../../services/network";
import SecondHeader from "../../../../components/Header/SecondHeader";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./style.css";
const SuccessSubmissionsPerUsers = lazy(() => import("./Charts/SuccessSubmissionsPerUsers"));
const tableWidth = 40;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    margin: `${tableWidth}px`,
    width: `calc(100vw - ${tableWidth * 2}px)`,
  },
});
function OneTeamPage({ darkMode }) {
  const classes = useStyles();
  const { id } = useParams();
  const [teamMembers, setTeamMembers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: members } = await network.get(`/api/v1/teams/team-page/${id}`);
        setTeamMembers(members);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [id]);

  const paths = [
    { name: "Team Information", URL: `/teams/${id}` },
    { name: "Team Tasks", URL: `/teams/tasks/${id}` },
  ];

  return !loading ? (
    teamMembers ? (
      <>
        <SecondHeader paths={paths} darkMode={darkMode} />

        <div className="generic-page">
          <h1 className="team-info-title-page">
            {" "}
        Team: <span className="team-info-title-page-name">{teamMembers.name}</span>{" "}
          </h1>
          <div className="team-info-paper-chart">
            <SuccessSubmissionsPerUsers darkMode={darkMode} />
          </div>
          <h2 style={{ marginLeft: tableWidth }} className="team-info-title-table">My Team Friends:</h2>
          <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell >name</TableCell>
                  <TableCell align="center">Phone Number</TableCell>
                  <TableCell align="center">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamMembers.Users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.userName}
                    </TableCell>
                    <TableCell align="center">{user.phoneNumber}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    ) : (
        <NotFound />
      )
  ) : (
      <Loading darkMode={darkMode} />
    );
}

export default OneTeamPage;
