import React from 'react';
import QueueAnim from 'rc-queue-anim';
import LiveNewsFeed from './LiveNewsFeed';
import CompanyBreakdownChart from './CompanyBreakdownChart';
import StatBoxes1 from './StatBoxes1';
import StatBoxes2 from './StatBoxes2';
import ProjectTable from './ProjectTable';
import './styles.scss';

const Main = () => (
  <div className="row">
    <div className="col-xl-6">
      <div className="box box-default mb-4">
        <div className="box-body" style={{paddingTop: '2rem', paddingBottom: '.5rem'}}>
          {/*<LiveNewsFeed />*/}
        </div>
      </div>
    </div>
    <div className="col-xl-6">
      <div className="box box-default mb-4">
        <div className="box-body">
          <CompanyBreakdownChart/>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="container-fluid no-breadcrumb page-dashboard">

    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Main /></div>
      <div key="4"><ProjectTable /></div>
    </QueueAnim>

  </div>
);

export default Dashboard;
