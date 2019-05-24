import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './LandingPage.css';
class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <header className="LandingPage-header">
          <p>
            Kickstart Coding - Frontend React<br />
            Project Tracker
          </p>
          <Link to="/dashboard/">View Dashboard</Link>
        </header>
      </div>
    );
  }
}

export default LandingPage;
