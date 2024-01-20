import React, { useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
import { Link, useNavigate } from 'react-router-dom';
import network from '../../../services/network';
import Loading from '../../../components/Loading';
import TeamSvg from '../../../images/reactSvg/Teams';
import TeacherSvg from '../../../images/reactSvg/TeacherAnalytics';
import './MyTeams.css';

function TeamCard({ team }) {
  const linkPath = team.UserTeam.permission === 'teacher'
    ? `/teams/teacher/${team.id}`
    : `/teams/${team.id}`;

  useEffect(() => {
    const user = Cookies.get('userName');
    mixpanel.track('User On Teams Area', { User: `${user}` });
  }, []);

  return (
    <Link to={linkPath} className="my-team-link">
      <div className="my-team-card">
        <div className="my-team-name">{team.name}</div>
        <div className="my-team-pic">
          {team.UserTeam.permission === 'teacher' ? (
            <div>
              <TeacherSvg />
              <div className="my-team-teacher">As Teacher</div>
            </div>
          ) : (
            <TeamSvg />
          )}
        </div>
      </div>
    </Link>
  );
}

function MyTeams() {
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchUserTeam = useCallback(async () => {
    try {
      const { data: userTeam } = await network.get(
        '/api/v1/teams/all-teams-by-user',
      );
      setTeamData(userTeam.Teams);
      if (userTeam.Teams.length === 1) {
        const team = userTeam.Teams[0];
        const linkPath = team.UserTeam.permission === 'teacher'
          ? `/teams/teacher/${team.id}`
          : `/teams/${team.id}`;
        navigate(linkPath);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchUserTeam();
  }, []);

  return (
    <div className="my-teams">
      <h1 className="my-teams-title">Teams Area</h1>
      <div className="my-teams-container">
        {!loading ? (
          teamData && teamData.length > 0 ? (
            teamData.map((team) => <TeamCard key={team.id} team={team} />)
          ) : (
            <h1>Your not member in any team </h1>
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default MyTeams;
