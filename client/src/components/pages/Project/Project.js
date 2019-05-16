import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Project.css';
class Project extends Component {
  render() {
    return (
      <div className="Project">
        {/* <header className="LandingPage-header">
          <p>
            Kickstart Coding - Frontend React<br />
            MERN Starter Project - Project!
          </p>
          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write article</Link>
        </header> */}

        <div className="title">
          <h1> Project Tracker </h1>
        </div>

        <div className="gantt">
          <div className="toprow">
          </div>
          <div className="project">
            <div className="projectName" style={{display: 'inline-block'}}> Project 1 Name</div>
            <span className="projectDurations">
            <div className="duration" style={{width: '100px', height: '15px', display: 'inline-block'}}> </div>
              <div className="duration" style={{backgroundColor: 'blue', width: '200px', height: '15px', display: 'inline-block'}}> </div>
              <div className="duration" style={{backgroundColor: 'yellow', width: '75px', height: '15px', display: 'inline-block'}}> </div>
              <div className="duration" style={{backgroundColor: 'red', width: '125px', height: '15px', display: 'inline-block'}}> </div>
            </span>
          </div>

          <div className="project">
            <span className="projectName"> Project 2 Name</span>
            <span className="projectDurations"> ## Insert Project 2 Durations ##</span>
          </div>

          <div className="project">
            <span className="projectName"> Project 3 Name</span>
            <span className="projectDurations"> ## Insert Project 3 Durations ##</span>
          </div>
        </div>

        <br />
        <br />
        <hr />
        <br />
        <br />
    <div className="container">

      <div className="column1">
        <div className="logo">
          <p>Logo Goes Here</p>
        </div>
        <div className="projects">
          <p>Project Name</p>
          <p>Project Name</p>
        </div>
      </div>

      <div className="row1">
        <p>Dates Here</p>
      </div>

      <div className="row2">
        <p> Gantt Goes Here</p>
      </div>

    </div>

    <h2 className="projectTitle">Add/Edit Project</h2>

    <div className="projectDetails">
      <label>Project Name</label><input></input>
      <label>Project Start Date</label><input></input>
      <label>Project End Date</label><input></input>
      <button>Save</button>
    </div>



      </div>
    );
  }
}

export default Project;
