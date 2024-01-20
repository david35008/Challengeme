import React, { useState, useEffect, useCallback } from 'react';
import {
  Tooltip,
  Legend,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import Loading from '../Loading';
import network from '../../services/network';
import '../../styles/Charts.css';

function SimpleBarChart({
  path, title, xKey, yKey,
}) {
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await network.get(path);
      setData(data);
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return data ? (
    <div className="Simple-Bar-Chart">
      <h2 className="dashboard-title-chart">{title}</h2>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={`${xKey}`} height={60} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={`${yKey}`} fill="#005FAC" />
      </BarChart>
    </div>
  ) : (
    <Loading />
  );
}

export default SimpleBarChart;
