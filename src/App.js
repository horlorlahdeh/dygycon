import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Pricing from './pages/Pricing/index';
import SupportUs from './pages/SupportUs/index';
import ContactUs from './pages/ContactUs/index';
import Faq from './pages/Faq/index';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <Router>
      <NavBar />
        <Route exact path='/' component={Home} />
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/supportUs' component={SupportUs} />
          <Route exact path='/contactUs' component={ContactUs} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
