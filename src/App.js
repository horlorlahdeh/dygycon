import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Pricing from './pages/Pricing/index';
import Support from './pages/Support/index';

function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path='/' component={Home} />
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/support' component={Support} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
