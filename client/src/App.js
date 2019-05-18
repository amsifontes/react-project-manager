import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
// var config = require('./.env.local');
// console.log(config);

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

let projects = [
    {
      projectName: "Lincoln Avenue House",
      phases: [
        {
          phaseName: "Programming",
          phaseStart: 3,
          phaseEnd: 6
        },
        {
          phaseName: "Schematic Design",
          phaseStart: 6,
          phaseEnd: 13
        },
        {
          phaseName: "Design Development",
          phaseStart: 13,
          phaseEnd: 15
        },
        {
          phaseName: "Construction Documents",
          phaseStart: 15,
          phaseEnd: 18
        },
        {
          phaseName: "Bidding",
          phaseStart: 18,
          phaseEnd: 26
        },
        {
          phaseName: "Construction Administration",
          phaseStart: 26,
          phaseEnd: 29
        },
      ],
    },
    {
      projectName: "Hugo Street ADU",
      phases: [
        {
          phaseName: "Programming",
          phaseStart: 1,
          phaseEnd: 5
        },
        {
          phaseName: "Schematic Design",
          phaseStart: 5,
          phaseEnd: 11
        },
        {
          phaseName: "Design Development",
          phaseStart: 11,
          phaseEnd: 15
        },
        {
          phaseName: "Construction Documents",
          phaseStart: 15,
          phaseEnd: 17
        },
        {
          phaseName: "Bidding",
          phaseStart: 17,
          phaseEnd: 22
        },
        {
          phaseName: "Construction Administration",
          phaseStart: 22,
          phaseEnd: 25
        },
      ],
    },
    {
      projectName: "San Pablo Blvd ADU",
      phases: [
        {
          phaseName: "Programming",
          phaseStart: 6,
          phaseEnd: 8
        },
        {
          phaseName: "Schematic Design",
          phaseStart: 8,
          phaseEnd: 12
        },
        {
          phaseName: "Design Development",
          phaseStart: 12,
          phaseEnd: 15
        },
        {
          phaseName: "Construction Documents",
          phaseStart: 15,
          phaseEnd: 19
        },
        {
          phaseName: "Bidding",
          phaseStart: 19,
          phaseEnd: 25
        },
        {
          phaseName: "Construction Administration",
          phaseStart: 25,
          phaseEnd: 30
        },
      ],
    },
    {
      projectName: "Russell Avenue ADU",
      phases: [
        {
          phaseName: "Programming",
          phaseStart: 2,
          phaseEnd: 7
        },
        {
          phaseName: "Schematic Design",
          phaseStart: 7,
          phaseEnd: 12
        },
        {
          phaseName: "Design Development",
          phaseStart: 12,
          phaseEnd: 15
        },
        {
          phaseName: "Construction Documents",
          phaseStart: 15,
          phaseEnd: 19
        },
        {
          phaseName: "Bidding",
          phaseStart: 19,
          phaseEnd: 25
        },
        {
          phaseName: "Construction Administration",
          phaseStart: 25,
          phaseEnd: 30
        },
      ],
    },
    {
      projectName: "Berkeley ADU",
      phases: [
        {
          phaseName: "Programming",
          phaseStart: 3,
          phaseEnd: 8
        },
        {
          phaseName: "Schematic Design",
          phaseStart: 8,
          phaseEnd: 9
        },
        {
          phaseName: "Design Development",
          phaseStart: 9,
          phaseEnd: 12
        },
        {
          phaseName: "Construction Documents",
          phaseStart: 12,
          phaseEnd: 19
        },
        {
          phaseName: "Bidding",
          phaseStart: 19,
          phaseEnd: 23
        },
        {
          phaseName: "Construction Administration",
          phaseStart: 23,
          phaseEnd: 38
        },
      ],
    }
  ]     


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">MERN Starter</h1>
          <Link to="/">Welcome</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write Article</Link>
        </nav>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/blog/' component={Blog} />
            <Route exact path='/write/' component={WriteArticle} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
