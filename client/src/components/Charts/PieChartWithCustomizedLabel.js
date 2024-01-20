import React, { useState, useEffect, useCallback } from 'react';
import {
  PieChart, Pie, Tooltip, Cell, Legend,
} from 'recharts';
import '../../styles/Charts.css';
import Loading from '../Loading';
import network from '../../services/network';

const COLORS = ['#00C49F', '#FF8042', '#005FAC'];
const RADIAN = Math.PI / 180;

function PieChartWithCustomizedLabel({
  path,
  title,
  xKey,
  defaultOption,
  defaultOptionMessage,
  message,
}) {
  const [submissions, setSubmissions] = useState();
  const [challengesOption, setChallengesOption] = useState();
  const [chosenChallenges, setChosenChallenges] = useState('');

  const fetchData = useCallback(async (Challenges) => {
    try {
      const { data: submissions } = await network.get(path + Challenges);
      setSubmissions([
        { name: 'success', value: submissions.success },
        { name: 'fail', value: submissions.fail },
        { name: 'not yet', value: submissions.notYet },
      ]);
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  const chooseChallenge = useCallback((event) => {
    setChosenChallenges(event.target.value);
    // eslint-disable-next-line
  }, []);

  const getAllChallengesForOption = useCallback(async () => {
    const { data: allChallengesFromServer } = await network.get(
      '/api/v1/challenges/',
    );
    const challengesOptions = allChallengesFromServer.map((challenge) => (
      <option
        key={challenge.id}
        onClick={() => {
          chooseChallenge(challenge.id);
        }}
        value={challenge.id}
      >
        {challenge.name}
      </option>
    ));
    challengesOptions.unshift(
      <option
        key="defaultOption"
        onClick={() => {
          chooseChallenge(defaultOption);
        }}
        value={defaultOption}
      >
        {defaultOptionMessage}
      </option>,
    );
    setChallengesOption(challengesOptions);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData(chosenChallenges);
    // eslint-disable-next-line
  }, [chosenChallenges]);

  useEffect(() => {
    getAllChallengesForOption();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setChosenChallenges(defaultOption);
    // eslint-disable-next-line
  }, []);

  const renderCustomizedLabel = useCallback(
    ({
      cx, cy, midAngle, innerRadius, outerRadius, percent,
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    },
    [],
  );

  return submissions ? (
    <div className="success-chart">
      <h2 className="dashboard-title-chart">{title}</h2>
      {challengesOption && (
        <select onClick={chooseChallenge}>{challengesOption}</select>
      )}
      <br />
      {submissions.some((option) => option.value > 0) ? (
        <PieChart width={400} height={400}>
          <Pie
            data={submissions}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey={`${xKey}`}
          >
            {submissions.map((entry, index) => (
              <Cell
                key={`cell-${index + entry}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <h2>{message}</h2>
      )}
    </div>
  ) : (
    <Loading />
  );
}

export default PieChartWithCustomizedLabel;
