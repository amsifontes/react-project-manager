import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
// var config = require('./.env.local');
// console.log(config);

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';
import Dashboard from './components/pages/Dashboard/Dashboard.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">MERN Starter</h1>
          <Link to="/">Welcome</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write Article</Link>
          <Link to="/dashboard/">View Dashboard</Link>
        </nav>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/blog/' component={Blog} />
            <Route exact path='/write/' component={WriteArticle} />
            <Route exact path='/dashboard/' component={Dashboard} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
