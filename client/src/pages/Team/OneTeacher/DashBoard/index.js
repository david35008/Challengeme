import React, { lazy, useEffect } from 'react';
import Cookies from 'js-cookie';
import mixpanel from 'mixpanel-browser';
import { useParams } from 'react-router-dom';

const SuccessSubmissionsPerUsers = lazy(
  () => import('../../../../components/Charts/DoubleBarChart'),
);
const LastWeekSubmissions = lazy(
  () => import('../../../../components/Charts/SimpleLineChart'),
);
const SuccessPerChallenge = lazy(
  () => import('../../../../components/Charts/HorizontalBarChart'),
);
const TeamTotalSubmission = lazy(
  () => import('../../../../components/Charts/PieChartWithCustomizedLabel'),
);
const TopSuccessUsers = lazy(
  () => import('../../../../components/Charts/SimpleBarChart'),
);

function DashBoard({ teamName }) {
  const { id } = useParams();
  useEffect(() => {
    const user = Cookies.get('userName');
    mixpanel.track('User On Team Dashboard Teacher Area', {
      User: `${user}`,
      Team: teamName,
    });
  }, [teamName]);

  return (
    <div className="generic-page">
      <h1 className="dashboard-title-page">
        {' '}
        Team:
        {' '}
        <span className="dashboard-title-page-name">{teamName}</span>
        {' '}
      </h1>
      <div className="dashboard-flexBox">
        <div className="paper-dashboard-chart">
          <TeamTotalSubmission
            path={`/api/v1/insights/teacher/team-submissions/${id}?challenge=`}
            title="Teams Total Submissions"
            xKey="value"
            defaultOption="assignments"
            defaultOptionMessage="Team Assignments"
            message="You haven't Assign Any Assignments Yet"
          />
        </div>
        <div className="paper-dashboard-chart">
          <SuccessPerChallenge
            path={`/api/v1/insights/teacher/success-challenge/${id}`}
            title="Challenges Most Success Submissions"
            xKey="name"
            yKey="challengeSuccesses"
          />
        </div>
        <div className="paper-dashboard-chart">
          <SuccessSubmissionsPerUsers
            path={`/api/v1/insights/teacher/top-user/${id}`}
            title="Teams Success Submissions"
            xKey="userName"
            yKey1="success"
            yKey2="fail"
          />
        </div>
        <div className="paper-dashboard-chart">
          <LastWeekSubmissions
            path={`/api/v1/insights/teacher/last-week-submissions/${id}`}
            title="Last Week Submissions"
            xKey="createdAt"
            yKey="dateSubmissions"
          />
        </div>
        <div className="paper-dashboard-chart">
          <TopSuccessUsers
            path={`/api/v1/insights/student/top-user/${id}`}
            title="Teams Success Submissions"
            xKey="userName"
            yKey="success"
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
