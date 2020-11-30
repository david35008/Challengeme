import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Tooltip, Legend, BarChart, Bar, CartesianGrid, XAxis, YAxis,
} from 'recharts';
import Loading from '../../../../../components/Loading';
import network from '../../../../../services/network';

function SuccessSubmissions({ darkMode }) {
  const { id } = useParams();
  const [teamMembers, setTeamMembers] = useState();

  const getDataOnTeam = async () => {
    try {
      const { data: mostSuccessChallenges } = await network.get(`/api/v1/insights/student/top-user/${id}`);
      setTeamMembers(mostSuccessChallenges);
    } catch (error) {
    }
  };

  useEffect(() => {
    getDataOnTeam();
    // eslint-disable-next-line
  }, [id]);

  return (
    teamMembers
      ? (
        <div className="success-chart">
          <h2 className="dashboard-title-chart">Teams Success Submissions</h2>
          <BarChart
            width={730}
            height={250}
            data={teamMembers}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="userName" height={60} interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="success" fill="#005FAC" />
          </BarChart>
        </div>
      ) : <Loading darkMode={darkMode} />
  );
}

export default SuccessSubmissions;
