import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Blog from './views/blog'
import Supportingtext from './views/supportingtext'
import Header from './views/header'
import Footer from './views/footer'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Blog} exact path="/blog" />
        <Route component={Supportingtext} exact path="/supportingtext" />
        <Route component={Header} exact path="/" />
        <Route component={Footer} exact path="/footer" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
