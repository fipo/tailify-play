import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './styles/global.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import CampaignReport from './components/CampaignReport'
import { getPosts } from './actions/postActions'
store.dispatch(getPosts())

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/report" exact component={CampaignReport} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)

export default App
