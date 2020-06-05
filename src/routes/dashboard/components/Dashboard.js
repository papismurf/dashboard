import React from 'react';
import QueueAnim from 'rc-queue-anim';
import BarDataChart from './BarDataChart';
import CompanyBreakdownChart from './CompanyBreakdownChart';
import SaveFilters from "./SaveFilters";
import ProjectTable from './CompanySpotlight';
import Heatmap from "echarts/src/chart/heatmap/HeatmapLayer";
import './styles.scss';
import NewsFeedJumbotron from "./NewsFeedJumbotron";
import SignsGithubChart from "./SignsGithubChart";
import SignsRedditChart from "./SignsRedditChart";
import SignsTwitterChart from './SignsTwitterChart';

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
          <SignsTwitterChart/>
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
          <SignsRedditChart />
        </div>
    </div>
  </div>
);

const SignsOfLife = () => (
  <div className="row">
    <div className="col-xl-6">
      <div className="box-body" style={{paddingTop: '2rem', paddingBottom: '.5rem'}}>
        <SignsGithubChart />
      </div>
    </div>
    <div className="col-xl-6">
      <div className="box-body">

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
      <div key="4"><SignsOfLife /></div>
      <div key="1"></div>

    </QueueAnim>

  </div>
);

export default Dashboard;
