import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
// var config = require('./.env.local');
// console.log(config);

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';
import Project from './components/pages/Project/Project.js';

let projects = 
    {
      "name": "Lincoln Avenue House",
      "address": "22 Lincoln Avenue",
      "phases": {
          "3": 6, 
          "6": 13, 
          "13": 15,
          "15": 18,
          "18": 26,
          "26": 29
      },
      "name": "Hugo Street ADU",
      "address": "5039 Hugo Street",
      "phases": {
          "1": 5, 
          "5": 11, 
          "11": 15,
          "15": 17,
          "17": 22,
          "22": 25
      },
      "name": "San Pablo Blvd ADU",
      "address": "5904 San Pablo Blvd",
      "phases": {
          "6": 8, 
          "8": 12, 
          "12": 15,
          "15": 19,
          "19": 25,
          "25": 30
      },
      "name": "Russell Avenue ADU",
      "address": "30 Russell Avenue",
      "phases": {
          "2": 7, 
          "7": 12, 
          "12": 15,
          "15": 19,
          "19": 25,
          "25": 30
      },      
      "name": "Berkeley ADU",
      "address": "26 Berkeley Avenue",
      "phases": {
          "3": 8, 
          "8": 9, 
          "9": 12,
          "12": 19,
          "19": 23,
          "23": 28
      }      
    }


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">MERN Starter</h1>
          <Link to="/">Welcome</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write Article</Link>
          <Link to="/project/">View Project</Link>
        </nav>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/blog/' component={Blog} />
            <Route exact path='/write/' component={WriteArticle} />
            <Route exact path='/project/' component={Project} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
