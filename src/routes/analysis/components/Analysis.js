import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TimeSeries from './TimeSeries';

import './styles.scss';


const Main = () => (
  <div className="row">
    <div className="col-xl-6">
      <div className="box box-default mb-4">
        <div className="box-body" style={{paddingTop: '2rem', paddingBottom: '.5rem'}}>
          <TimeSeries />
        </div>
      </div>
    </div>
    <div className="col-xl-6">
      <div className="box box-default mb-4">
        <div className="box-body">

        </div>
      </div>
    </div>
  </div>

);

const Analysis = () => (

  <div className="container-fluid no-breadcrumb page-dashboard">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Main /></div>
      <div key="2"></div>
    </QueueAnim>
  </div>

)

export default Analysis;
