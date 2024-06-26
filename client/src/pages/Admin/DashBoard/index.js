import React, { lazy } from 'react';

const SuccessSubmissionsPerUsers = lazy(
  () => import('../../../components/Charts/DoubleBarChart'),
);
const LastWeekSubmissions = lazy(
  () => import('../../../components/Charts/SimpleLineChart'),
);
const SuccessPerChallenge = lazy(
  () => import('../../../components/Charts/HorizontalBarChart'),
);
const TotalSubmission = lazy(
  () => import('../../../components/Charts/PieChartWithCustomizedLabel'),
);

function DashBoard() {
  return (
    <div className="generic-page">
      <h1 className="dashboard-title-page">This DashBoard Admin Page</h1>
      <div className="dashboard-flexBox">
        <div className="paper-dashboard-chart">
          <TotalSubmission
            path="/api/v1/insights/admin/all-submissions?challenge="
            title="Users Total Submissions"
            xKey="value"
            defaultOption="all"
            defaultOptionMessage="All Challenges"
            message="There is no submissions on this challenge"
          />
        </div>
        <div className="paper-dashboard-chart">
          <SuccessPerChallenge
            path="/api/v1/insights/admin/success-challenge/"
            title="Challenges Most Success Submissions"
            xKey="name"
            yKey="challengeSuccesses"
          />
        </div>
        <div className="paper-dashboard-chart">
          <SuccessSubmissionsPerUsers
            path="/api/v1/insights/admin/top-user"
            title="Users Success Submissions"
            xKey="userName"
            yKey1="success"
            yKey2="fail"
          />
        </div>

        <div className="paper-dashboard-chart">
          <LastWeekSubmissions
            path="/api/v1/insights/admin/last-week-submissions"
            title="Last Week Submissions"
            xKey="createdAt"
            yKey="dateSubmissions"
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
