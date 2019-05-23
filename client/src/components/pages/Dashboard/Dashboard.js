import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Dashboard.css';
class Dashboard extends Component {
  state = {
    tempProject: {
      projectName: "Project Name",
      phases: [
        {
          phaseName: "Schematic Design",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "blue"
        },
        {
          phaseName: "Design Development",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "yellow"
        },
        {
          phaseName: "Construction Documents",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "red"
        },
        {
          phaseName: "Construction Administration",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "green"
        },

      ],
    },
    baseState: {
      projectName: "Project Name",
      phases: [
        {
          phaseName: "Schematic Design",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "blue"
        },
        {
          phaseName: "Design Development",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "yellow"
        },
        {
          phaseName: "Construction Documents",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "red"
        },
        {
          phaseName: "Construction Administration",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "green"
        },

      ],
    },
    projects: [],
  }
  onChangeProject = (ev) => {
    console.log(ev.target.value);
    let value = ev.target.value;
    var tempProject = this.state.tempProject;
    tempProject.projectName = value;
    this.setState({
      tempProject,
   });
   console.log('state object:', this.state.tempProject)
  }

  onChangeStart1 = (ev) => {
    console.log(ev.target.value)
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[0]
    tempPhase.phaseStart = value;
    console.log('tempPhaseEnd:', tempPhase);
    this.setState({
      tempPhase,
    });
    console.log('state object:', this.state.tempProject.phases[0].phaseStart)
  }

  onChangeEnd1 = (ev) => {
    console.log(ev.target.value)
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[0]
    tempPhase.phaseEnd = value;
    console.log('tempPhaseEnd:', tempPhase);
    this.setState({
      tempPhase,
    });
    console.log('state object:', this.state.tempProject.phases[0].phaseEnd)
  }

  onChangeStart2 = (ev) => {
    console.log(ev.target.value)
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[1]
    tempPhase.phaseStart = value;
    console.log('tempPhaseEnd:', tempPhase);
    this.setState({
      tempPhase,
    });
    console.log('state object:', this.state.tempProject.phases[1].phaseStart)
  }

  onChangeEnd2 = (ev) => {
    console.log(ev.target.value)
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[1]
    tempPhase.phaseEnd = value;
    console.log('tempPhaseEnd:', tempPhase);
    this.setState({
      tempPhase,
    });
    console.log('state object:', this.state.tempProject.phases[1].phaseEnd)
  }

  onChangeStart3 = (ev) => {
    console.log(ev.target.value)
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[2]
    tempPhase.phaseStart = value;
    console.log('tempPhaseEnd:', tempPhase);
    this.setState({
      tempPhase,
    });
    console.log('state object:', this.state.tempProject.phases[2].phaseStart)
  }

  onChangeEnd3 = (ev) => {
    console.log(ev.target.value)
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[2]
    tempPhase.phaseEnd = value;
    console.log('tempPhaseEnd:', tempPhase);
    this.setState({
      tempPhase,
    });
    console.log('state object:', this.state.tempProject.phases[2].phaseEnd)
  }

  onChangeStart4 = (ev) => {
    console.log(ev.target.value)
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[3]
    tempPhase.phaseStart = value;
    console.log('tempPhaseEnd:', tempPhase);
    this.setState({
      tempPhase,
    });
    console.log('state object:', this.state.tempProject.phases[3].phaseStart)
  }

  onChangeEnd4 = (ev) => {
    console.log(ev.target.value)
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[3]
    tempPhase.phaseEnd = value;
    console.log('tempPhaseEnd:', tempPhase);
    this.setState({
      tempPhase,
    });
    console.log('state object:', this.state.tempProject.phases[3].phaseEnd)
  }

  submit = () => {
    let tempProjectObject = this.state.tempProject;
    this.state.projects.push(tempProjectObject);
    const formData = {
      projects: this.state.projects,
    };
    console.log('Sending:', formData);

    this.setState({
      tempProject: this.state.baseState,
    })
    fetch('/api/mongodb/ProjectDetails/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect?
        this.props.history.push('/dashboard/');
      });
  };


  render() {
    return (
      <div className="Project">
        <div className="title">
          <h1> Project Tracker </h1>
        </div>

        <div>
          {
            this.state.projects.map((project, index) => (
              <div className="project">
                <div key={index}
                  className="projectName"
                  style={{display: 'inline-block', width: '200px'}}>
                    Project name: {project.projectName}
                    index: {index}
                    {/* {homes.map(home => <div>{home.name}</div>)} */}
                    {/* <button onClick={() => this.onChooseKeeper(index)}>Choose</button> */}
                </div>
                {
                  project.phases.map((phase, index) => {
                    console.log('index:', index);
                    let duration = phase.phaseEnd - phase.phaseStart;
                    console.log('duration:', duration);
                    const width = (duration * 15).toString() + 'px';
                    console.log('width:', width);
                    const color = phase.phaseColor;
                    if (index === 0) {
                      const start = (phase.phaseStart * 15) + 'px';
                      return(
                        <div className="phase"
                          style={{
                            backgroundColor: color,
                            width: width,
                            height: '15px',
                            display: 'inline-block',
                            margin: '2px',
                            marginLeft: start,
                            borderRadius: '8px'}}>
                        </div>
                      )
                    } else {
                      const start = phase.phaseStart - project.phases[index-1].phaseEnd;
                      console.log('else clause invoked, start:', start)
                    return(
                      <div className="phase"
                        style={{
                          backgroundColor: color,
                          width: width,
                          height: '15px',
                          display: 'inline-block',
                          margin: '2px',
                          marginLeft: start,
                          borderRadius: '8px'}}>
                      </div>
                    )}

                  }
                )}
               </div>
            ))
          }
        </div>

        {/* <div>
          {
            Object.keys(templates).map(template_name => {
              return (
                <div>
                  <div>{template_name}</div>
                  {
                    templates[template_name].items.map(item => {
                      return(<div>{item}</div>)
                    })
                  }
                </div>
              )
            })
          }
        </div> */}

        <div className="gantt">
          <div className="toprow">
          </div>
          <div className="project">
            <div className="projectName" style={{display: 'inline-block', width: '200px'}}> Project 1 Name</div>
            <span className="phases">
              <div className="phase" style={{width: '100px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'blue', width: '200px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: 'yellow', width: '75px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: 'red', width: '125px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
            </span>
          </div>


          <div className="project">
            <div className="projectName" style={{display: 'inline-block'}}> Project 2 Name</div>
            <span className="phases">
              <div className="phase" style={{width: '100px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'blue', width: '200px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: 'yellow', width: '75px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: 'red', width: '125px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
            </span>
          </div>

          <div className="project">
            <div className="projectName" style={{display: 'inline-block'}}> Project 3 Name</div>
            <span className="phases">
              <div className="phase" style={{width: '100px', height: '15px', display: 'inline-block'}}> </div>
              <div className="phase" style={{backgroundColor: 'blue', width: '200px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: 'yellow', width: '75px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: 'red', width: '125px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
            </span>
          </div>
        </div>


        <br />


    <h2 className="projectTitle">Add/Edit Project</h2>

    <div className="projectDetails">
      <label>Project Name</label>
      <input
        placeholder="Placeholder text"
        value={this.state.tempProject.projectName}
        onChange={this.onChangeProject}
         >
      </input>
      <div className="col1">
      <p>Schematic Design</p>
        <label>Phase Start Date</label><br/>
          <input value={this.state.tempProject.phases[0].phaseStart} onChange={this.onChangeStart1}></input><br/>
        <label>Phase End Date</label><br/>
          <input value={this.state.tempProject.phases[0].phaseEnd} onChange={this.onChangeEnd1}></input><br/>
      </div>
      <div className="col2">
        <p>Design Documents</p>
          <label>Phase Start Date</label><br/>
            <input value={this.state.tempProject.phases[1].phaseStart} onChange={this.onChangeStart2}></input><br/>
          <label>Phase End Date</label><br/>
            <input value={this.state.tempProject.phases[1].phaseEnd} onChange={this.onChangeEnd2}></input><br/>
      </div>
      <div className="col3">
        <p>Construction Documents</p>
          <label>Phase Start Date</label><br/>
            <input value={this.state.tempProject.phases[2].phaseStart} onChange={this.onChangeStart3}></input><br/>
          <label>Phase End Date</label><br/>
            <input value={this.state.tempProject.phases[2].phaseEnd} onChange={this.onChangeEnd3}></input><br/>
      </div>
      <div className="col4">
      <p>Construction Administration</p>
        <label>Phase Start Date</label><br/>
          <input value={this.state.tempProject.phases[3].phaseStart} onChange={this.onChangeStart4}></input><br/>
        <label>Phase End Date</label><br/>
          <input value={this.state.tempProject.phases[3].phaseEnd} onChange={this.onChangeEnd4}></input><br/>
      </div>
      <button onClick={this.submit}>Save</button>
    </div>

    </div>



    );
  }
}

export default Dashboard;
