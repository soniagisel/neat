import * as React from 'react'
import { RoutesProps } from './types'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from '../pages/logged/Dashboard'
import Users from '../pages/backOffice/Users'
import NotFound from '../pages/public/NotFound'
import Layout from '../components/Layout/Layout'
import LogIn from '../pages/LogIn/LogIn'

const Routes: React.SFC<RoutesProps> = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={LogIn} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/admin/users' component={Users} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes
