import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  PieChart, Pie, Tooltip, Cell, Legend,
} from 'recharts';
import Loading from '../../../../components/Loading';
import network from '../../../../services/network';
import '../style.css';

function TotalSubmission({ darkMode }) {
  const { id } = useParams();
  const [teamSubmissions, setTeamSubmissions] = useState([]);
  const [challengesOption, setChallengesOption] = useState();
  const [chosenChallenges, setChosenChallenges] = useState('all');

  const getDataOnTeam = async () => {
    try {
      const { data: submissions } = await network.get(`/api/v1/insights/admin/all-submissions?challenge=${chosenChallenges}`);
      const data = [
        { name: 'success', value: submissions.success },
        { name: 'fail', value: submissions.fail },
        { name: 'not yet', value: submissions.notYet },
      ];

      setTeamSubmissions(data);
    } catch (error) {
    }
  };

  const chooseChallenge = (event) => {
    setChosenChallenges(event.target.value);
  };

  const getAllChallengesForOption = async () => {
    const { data: allChallengesFromServer } = await network.get('/api/v1/challenges/');
    const challengesOptions = allChallengesFromServer.map((challenge) => <option onClick={() => { chooseChallenge(challenge.id); }} value={challenge.id}>{challenge.name}</option>);
    challengesOptions.unshift(<option onClick={() => { chooseChallenge('all'); }} value="all">All Challenges</option>);
    setChallengesOption(challengesOptions);
  };

  useEffect(() => {
    getDataOnTeam();
    // eslint-disable-next-line
    }, [chosenChallenges, id]);

  useEffect(() => {
    getAllChallengesForOption();
    // eslint-disable-next-line
    }, [id]);

  const COLORS = ['#00C49F', '#FF8042', '#005FAC'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    teamSubmissions
      ? (
        <div className="success-chart">
          <h2 className="dashboard-title-chart">Teams Total Submissions</h2>
          {challengesOption
                    && (
                      <select onClick={chooseChallenge}>
                        {challengesOption}
                      </select>
                    )}
          <br />
          <PieChart width={400} height={400}>
            <Pie
              data={teamSubmissions}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {teamSubmissions.map((entry, index) => (
                <Cell
                  key={`cell-${index + entry}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>

        </div>
      ) : <Loading darkMode={darkMode} />
  );
}

export default TotalSubmission;
