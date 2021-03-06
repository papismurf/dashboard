import React from 'react';
import QueueAnim from 'rc-queue-anim';
import LiveNewsFeed from './LiveNewsFeed';
import BarDataChart from './BarDataChart';
import CompanyBreakdownChart from './CompanyBreakdownChart';
import SaveFilters from "./SaveFilters";
import StatBoxes1 from './StatBoxes1';
import StatBoxes2 from './StatBoxes2';
import ProjectTable from './CompanySpotlight';
import Heatmap from "echarts/src/chart/heatmap/HeatmapLayer";
import './styles.scss';
import NewsFeed from "./NewsFeed";
import NewsFeedJumbotron from "./NewsFeedJumbotron";
import SignsGithubChart from "./SignsGithubChart";

const Main = () => (
  <div className="row">
    <div className="col-xl-6">
      <div className="box box-default mb-4">
        <div className="box-body" style={{paddingTop: '2rem', paddingBottom: '.5rem'}}>
          <BarDataChart/>
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

const SpotlightFilters = () => (
  <div className="row">
    <div className="col-xl-6">
        <div className="box-body" style={{paddingTop: '2rem', paddingBottom: '.5rem'}}>
          <ProjectTable/>
        </div>
    </div>
    <div className="col-xl-6">
        <div className="box-body">
          <SaveFilters/>
        </div>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="container-fluid no-breadcrumb page-dashboard">

    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><NewsFeedJumbotron/></div>
      <div key="2"><Main /></div>
      <div key="3"><SpotlightFilters /></div>
      <div key="4"></div>
      <div key="1"><SignsGithubChart /></div>

    </QueueAnim>

  </div>
);

export default Dashboard;
