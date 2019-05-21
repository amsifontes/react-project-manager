import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Dashboard.css';
class Dashboard extends Component {
  state = {
    projects: [
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
      ],

  }
  onChangeProject = (ev) => {
    this.setState({
      projectName: ev.target.value
   });
  }

  onChangeEnd1 = (ev) => {
    this.setState({
      phaseEnd1: ev.target.value
    });
  }
  onChangeEnd2 = (ev) => {
    this.setState({
      phaseEnd2: ev.target.value,
    });
  }
  onChangeEnd3 = (ev) => {
    this.setState({
      phaseEnd3: ev.target.value
    });
  }
  onChangeEnd4 = (ev) => {
    this.setState({
      phaseEnd4: ev.target.value,
    });
  }

  onChangeStart1 = (ev) => {
    this.setState({
      phaseStart1: ev.target.value
    });
  }
  onChangeStart2 = (ev) => {
    this.setState({
      phaseStart2: ev.target.value
    });
  }
  onChangeStart3 = (ev) => {
    this.setState({
      phaseStart3: ev.target.value
    });
  }
  onChangeStart4 = (ev) => {
    this.setState({
      phaseStart4: ev.target.value
    });
  }



  submit = () => {
    const formData = {
          projectName: this.state.projectName,
          phases: [
            { phaseName: "Schematic Design",
              phaseStart: "phaseStart1",
              phaseEnd: "phaseEnd1"
            },
            {
              phaseName: "Design Development",
              phaseStart: "phaseStart2",
              phaseEnd: "phaseEnd2"
            },
            { phaseName: "Construction Documents",
              phaseStart: "phaseStart3",
              phaseEnd: "phaseEnd3"
            },
            { phaseName: "Construction Administration",
              phaseStart: "phaseStart4",
              phaseEnd: "phaseEnd4"
            }],

      state: this.state
    };

    fetch('/api/mongodb/ProjectDetails/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        this.props.history.push('/dashboard/');
      });
  };


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
            <span className="phases">
              <div className="phase" style={{width: '100px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'blue', width: '200px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'yellow', width: '75px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'red', width: '125px', height: '15px', display: 'inline-block'}}> </div>
            </span>
          </div>


          <div className="project">
            <div className="projectName" style={{display: 'inline-block'}}> Project 2 Name</div>
            <span className="phases">
              <div className="phase" style={{width: '100px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'blue', width: '200px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'yellow', width: '75px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'red', width: '125px', height: '15px', display: 'inline-block'}}> </div>
            </span>
          </div>

          <div className="project">
            <div className="projectName" style={{display: 'inline-block'}}> Project 3 Name</div>
            <span className="phases">
              <div className="phase" style={{width: '100px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'blue', width: '200px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'yellow', width: '75px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'red', width: '125px', height: '15px', display: 'inline-block'}}> </div>
            </span>
          </div>
        </div>
{/*
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
*/}
    <h2 className="projectTitle">Add/Edit Project</h2>

    <div className="projectDetails">
      <label>Project Name</label><input value={this.state.projectName} onChange={this.onChangeProject} ></input>
      <label>Schematic Design</label><br></br>
      <label>Phase Start Date</label><input value={this.state.start1}  onChange={this.onChangeStart1}></input>
      <label>Phase End Date</label><input value={this.state.end1}  onChange={this.onChangeEnd1}></input>
      <label>Design Documents</label><br></br>
      <label>Phase Start Date</label><input value={this.state.start2}  onChange={this.onChangeStart2}></input>
      <label>Phase End Date</label><input value={this.state.end2}  onChange={this.onChangeEnd2}></input>
      <label>Construction Documents</label><br></br>
      <label>Phase Start Date</label><input value={this.state.start3}  onChange={this.onChangeStart3}></input>
      <label>Phase End Date</label><input value={this.state.end3}  onChange={this.onChangeEnd3}></input>
      <label>Construction Administration</label><br></br>
      <label>Phase Start Date</label><input value={this.state.start4}  onChange={this.onChangeStart4}></input>
      <label>Phase End Date</label><input value={this.state.end4}  onChange={this.onChangeEnd4}></input>
      <button onClick={this.submit}>Save</button>
    </div>

    </div>



    );
  }
}

export default Dashboard;
