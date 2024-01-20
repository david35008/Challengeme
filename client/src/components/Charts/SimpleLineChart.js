import React, { useState, useEffect, useCallback } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Loading from '../Loading';
import network from '../../services/network';
import '../../styles/Charts.css';

function SimpleLineChart({
  path, title, xKey, yKey,
}) {
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await network.get(path);
      setData(data.reverse());
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  const CustomizedLabel = useCallback(
    ({
      x, y, stroke, value,
    }) => (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    ),
    [],
  );

  const CustomizedAxisTick = useCallback(
    ({
      x, y, stroke, payload,
    }) => (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    ),
    [],
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return data ? (
    <div className="Simple-Line-Chart">
      <h2 className="dashboard-title-chart">{title}</h2>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={`${xKey}`} height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={`${yKey}`}
          stroke="#8884d8"
          label={<CustomizedLabel />}
        />
      </LineChart>
    </div>
  ) : (
    <Loading />
  );
}

export default SimpleLineChart;
