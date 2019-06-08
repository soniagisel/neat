import * as React from 'react'
import { RoutesProps } from './types'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from '../pages/logged/Dashboard'
import Users from '../pages/backOffice/Users'
import NotFound from '../pages/public/NotFound'

const Routes: React.SFC<RoutesProps> = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/admin/users' component={Users} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
