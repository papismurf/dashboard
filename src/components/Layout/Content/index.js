import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import loadable from 'react-loadable';
import LoadingComponent from 'components/Loading';
import { Layout } from 'antd';

const { Content } = Layout;

let Calendar = loadable({
  loader: () => import('routes/calendar/'),
  loading: LoadingComponent
})
let Compare = loadable({
  loader: () => import('routes/compare/'),
  loading: LoadingComponent
})

let Dashboard = loadable({
  loader: () => import('routes/dashboard/'),
  loading: LoadingComponent
})
let Analysis = loadable({
  loader: () => import('routes/analysis/'),
  loading: LoadingComponent
})
let Feedback = loadable({
  loader: () => import('routes/feedback/'),
  loading: LoadingComponent
})

let AppLayout = loadable({
  loader: () => import('routes/layout/'),
  loading: LoadingComponent
})
let Page = loadable({
  loader: () => import('routes/page/'),
  loading: LoadingComponent
})

let UIOverview = loadable({
  loader: () => import('routes/ui-overview/'),
  loading: LoadingComponent
})
let Exception = loadable({
  loader: () => import('routes/exception/'),
  loading: LoadingComponent
})



class AppContent extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Content id='app-content'>
        <Route path={`${match.url}/dashboard`} component={Dashboard} />
        <Route path={`${match.url}/analysis`} component={Analysis} />
        <Route path={`${match.url}/compare`} component={Compare}/>
      </Content>
    );
  }
}

export default withRouter(AppContent);
