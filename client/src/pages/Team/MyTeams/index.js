import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import network from '../../../services/network';
import './MyTeams.css';

function TeamCard({ team }) {
  const linkPath = team.UserTeam.permission === 'teacher' ? `/teams/teacher/${team.id}` : `/teams/${team.id}`;

  return (
    <Link to={linkPath} className="my-team-link">
      <div className="my-team-card">
        <div className="my-team-name">{team.name}</div>
        <div className="my-team-description">description</div>
        {team.UserTeam.permission === 'teacher' && (
          <div className="my-team-teacher">As Teacher</div>
        )}
      </div>
    </Link>
  );
}

function MyTeams() {
  const [teamData, setTeamData] = useState();
  const Location = useHistory();
  const fetchUserTeam = async () => {
    try {
      const { data: userTeam } = await network.get('/api/v1/teams/all-teams-by-user');
      setTeamData(userTeam.Teams);
      if (userTeam.Teams.length === 1) {
        Location.push(`/teams/${userTeam.Teams[0].id}`);
      }
    } catch (error) { }
  };

  useEffect(() => {
    fetchUserTeam();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="my-teams">
      <h1 className="my-teams-title">Teams Area</h1>
      <div className="my-teams-container">
        {teamData && teamData.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
          />
        ))}
      </div>
    </div>
  );
}

export default MyTeams;
