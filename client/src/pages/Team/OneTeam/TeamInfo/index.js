import React, {
  useState, useEffect, useCallback, lazy,
} from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SecondHeader from '../../../../components/Header/SecondHeader';
import network from '../../../../services/network';
import NotFound from '../../../NotFound';
import Loading from '../../../../components/Loading';
import './style.css';

const TopSuccessUsers = lazy(
  () => import('../../../../components/Charts/SimpleBarChart'),
);

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
function OneTeamPage() {
  const classes = useStyles();
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
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    fetchTeamInfo();
    const user = Cookies.get('userName');
    mixpanel.track('User On Team Info Student Area', {
      User: `${user}`,
      Team: id,
    });
    // eslint-disable-next-line
  }, [id]);

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
            {' '}
            Team:
            {' '}
            <span className="team-info-title-page-name">
              {teamMembers.name}
            </span>
            {' '}
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
          <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>name</TableCell>
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
            </Table>
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
