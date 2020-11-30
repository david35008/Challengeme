import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Tooltip, Legend, Brush, BarChart, Bar, CartesianGrid, XAxis, YAxis,
} from 'recharts';
import Loading from '../../../../../components/Loading';
import network from '../../../../../services/network';

function SuccessSubmissions({ darkMode }) {
  const { id } = useParams();
  const [teamSubmissions, setTeamSubmissions] = useState();

  const getDataOnTeam = async () => {
    try {
      const { data: submissions } = await network.get(`/api/v1/insights/teacher/top-user/${id}`);
      setTeamSubmissions(submissions);
    } catch (error) {
    }
  };

  useEffect(() => {
    getDataOnTeam();
    // eslint-disable-next-line
  }, [id]);

  return (
    teamSubmissions
      ? (
        <div className="success-chart">
          <h2 className="dashboard-title-chart">Teams Success Submissions</h2>
          <BarChart
            width={730}
            height={250}
            data={teamSubmissions}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="userName" height={60} interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="success" fill="#FF8042" />
            <Bar dataKey="fail" fill="#005FAC" />
            <Brush dataKey="userName" height={30} endIndex={teamSubmissions.length >= 5 ? 4 : teamSubmissions.length - 1} stroke="#8884d8" />
          </BarChart>
        </div>
      ) : <Loading darkMode={darkMode} />
  );
}

export default SuccessSubmissions;
