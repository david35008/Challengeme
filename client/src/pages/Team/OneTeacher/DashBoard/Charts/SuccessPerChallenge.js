import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Loading from '../../../../../components/Loading';
import network from '../../../../../services/network';

function SuccessPerChallenge({ darkMode }) {
  const { id } = useParams();
  const [challenges, setChallenges] = useState();

  const getChallengesByMostSuccess = async () => {
    try {
      const { data: challengesMostSuccess } = await network.get(`/api/v1/insights/teacher/success-challenge/${id}`);
      setChallenges(challengesMostSuccess);
    } catch (error) {
    }
  };

  useEffect(() => {
    getChallengesByMostSuccess();
    // eslint-disable-next-line
    }, [])

  return (
    challenges
      ? (
        <div className="last-week-submissions-chart">
          <h2 className="dashboard-title-chart">Challenges Most Success Submissions</h2>
          <ComposedChart
            layout="vertical"
            width={600}
            height={400}
            data={challenges}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="challengeSuccesses" barSize={20} fill="#005FAC" />
          </ComposedChart>
        </div>
      ) : <Loading darkMode={darkMode} />
  );
}

export default SuccessPerChallenge;
