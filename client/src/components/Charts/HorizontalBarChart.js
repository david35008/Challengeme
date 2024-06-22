import React, { useState, useEffect, useCallback } from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Loading from '../Loading';
import network from '../../services/network';
import '../../styles/Charts.css';

function HorizontalBarChart({ path, title, xKey, yKey }) {
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
    <div className="last-week-submissions-chart">
      <h2 className="dashboard-title-chart">{title}</h2>
      <ComposedChart
        layout="vertical"
        width={600}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey={`${xKey}`} type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey={`${yKey}`} barSize={20} fill="#005FAC" />
      </ComposedChart>
    </div>
  ) : (
    <Loading />
  );
}

export default HorizontalBarChart;
