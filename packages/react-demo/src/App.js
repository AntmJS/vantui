import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import routes from './routes'
import './App.less'

export default function Index() {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  )
}
