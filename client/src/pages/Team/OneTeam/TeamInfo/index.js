import React, { useState, useEffect, useCallback, lazy } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
import { styled } from '@mui/system';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import SecondHeader from '../../../../components/Header/SecondHeader';
import network from '../../../../services/network';
import NotFound from '../../../NotFound';
import Loading from '../../../../components/Loading';
import './style.css';

const TopSuccessUsers = lazy(
  () => import('../../../../components/Charts/SimpleBarChart'),
);

const tableWidth = 40;

const Container = styled(Paper)({
  margin: `${tableWidth}px`,
  width: `calc(100vw - ${tableWidth * 2}px)`,
});

const StyledTable = styled(Table)({
  minWidth: 650,
});

function OneTeamPage() {
  const { id } = useParams();
  const [teamMembers, setTeamMembers] = useState();
  const [loading, setLoading] = useState(true);

  const fetchTeamInfo = useCallback(async () => {
    try {
      const { data: members } = await network.get(
        `/api/v1/teams/team-page/${id}`,
      );
      setTeamMembers(members);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchTeamInfo();
    const user = Cookies.get('userName');
    mixpanel.track('User On Team Info Student Area', {
      User: `${user}`,
      Team: id,
    });
  }, [fetchTeamInfo, id]);

  const paths = [
    { name: 'Team Information', URL: `/teams/${id}` },
    { name: 'Team Tasks', URL: `/teams/tasks/${id}` },
  ];

  return !loading ? (
    teamMembers ? (
      <>
        <SecondHeader paths={paths} />
        <div className="generic-page">
          <h1 className="team-info-title-page">
            Team:
            {' '}
            <span className="team-info-title-page-name">
              {teamMembers.name}
            </span>
          </h1>
          <div className="team-info-paper-chart">
            <TopSuccessUsers
              path={`/api/v1/insights/student/top-user/${id}`}
              title="Teams Success Submissions"
              xKey="userName"
              yKey="success"
            />
          </div>
          <h2
            style={{ marginLeft: tableWidth }}
            className="team-info-title-table"
          >
            My Team Friends:
          </h2>
          <TableContainer component={Container}>
            <StyledTable aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Phone Number</TableCell>
                  <TableCell align="center">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamMembers.Users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.userName}
                      {' '}
                      {user.UserTeam && user.UserTeam.permission === 'teacher'
                        ? '(Teacher)'
                        : ''}
                    </TableCell>
                    <TableCell align="center">{user.phoneNumber}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </div>
      </>
    ) : (
      <NotFound />
    )
  ) : (
    <Loading />
  );
}

export default OneTeamPage;
