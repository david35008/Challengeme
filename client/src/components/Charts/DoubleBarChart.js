import React, { useState, useEffect, useCallback } from 'react';
import {
  Tooltip,
  Legend,
  Brush,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import Loading from '../Loading';
import network from '../../services/network';
import '../../styles/Charts.css';

function DoubleBarChart({ path, title, xKey, yKey1, yKey2 }) {
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await network.get(path);
      setData(data.reverse());
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return data ? (
    <div className="Double-Bar-Chart">
      <h2 className="dashboard-title-chart">{title}</h2>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={`${xKey}`} height={60} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={`${yKey1}`} fill="#FF8042" />
        <Bar dataKey={`${yKey2}`} fill="#005FAC" />
        <Brush
          dataKey={`${xKey}`}
          height={30}
          endIndex={data.length >= 5 ? 4 : data.length - 1}
          stroke="#8884d8"
        />
      </BarChart>
    </div>
  ) : (
    <Loading />
  );
}

export default DoubleBarChart;
