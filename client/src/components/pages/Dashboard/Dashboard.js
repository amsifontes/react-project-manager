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
          phaseColor: "#e12726"
        },
        {
          phaseName: "Design Development",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "#505cfd"
        },
        {
          phaseName: "Construction Documents",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "#007bff"
        },
        {
          phaseName: "Construction Administration",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "#ffc107"
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
          phaseColor: "#e12726"
        },
        {
          phaseName: "Design Development",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "#505cfd"
        },
        {
          phaseName: "Construction Documents",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "#007bff"
        },
        {
          phaseName: "Construction Administration",
          phaseStart: 0,
          phaseEnd: 0,
          phaseColor: "#ffc107"
        },

      ],
    },
    projects: [],
  }

  onChangeProject = (ev) => {
    let value = ev.target.value;
    var tempProject = this.state.tempProject;
    tempProject.projectName = value;
    this.setState({
      tempProject,
   });
  }

  onChangeStart1 = (ev) => {
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[0]
    tempPhase.phaseStart = value;
    this.setState({
      tempPhase,
    });
  }

  onChangeEnd1 = (ev) => {
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[0]
    tempPhase.phaseEnd = value;
    this.setState({
      tempPhase,
    });
  }

  onChangeStart2 = (ev) => {
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[1]
    tempPhase.phaseStart = value;
    this.setState({
      tempPhase,
    });
  }

  onChangeEnd2 = (ev) => {
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[1]
    tempPhase.phaseEnd = value;
    this.setState({
      tempPhase,
    });
  }

  onChangeStart3 = (ev) => {
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[2]
    tempPhase.phaseStart = value;
    this.setState({
      tempPhase,
    });
  }

  onChangeEnd3 = (ev) => {
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[2]
    tempPhase.phaseEnd = value;
    this.setState({
      tempPhase,
    });
  }

  onChangeStart4 = (ev) => {
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[3]
    tempPhase.phaseStart = value;
    this.setState({
      tempPhase,
    });
  }

  onChangeEnd4 = (ev) => {
    let value = ev.target.value;
    let tempPhase = this.state.tempProject.phases[3]
    tempPhase.phaseEnd = value;
    this.setState({
      tempPhase,
    });
  }

  getAll = () => {
    fetch('/api/mongodb/ProjectDetails/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      console.log('Got this back on GET', data);
      this.setState({
        projects: data
      })
    });
  }

  componentWillMount(){
    this.getAll();
  }

  onDelete(id){
    console.log("onDelete triggered with ", {id})
    const delete_id = id;
    console.log("delete_id ", {delete_id});
    // delete one
    fetch(`/api/mongodb/ProjectDetails/${delete_id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    // .then(ret => console.log(ret))
    .then(response => response.json())
    .then(data => {
      console.log('Got this back on DELETE', data);
      // this.setState({
      //   projects: data
      // })
    })
    .then(setTimeout(this.getAll(), 1000));

    // Get all in DB
    // fetch('/api/mongodb/ProjectDetails/', {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json'},
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Got this back on GET', data);
    //   this.setState({
    //     projects: data
    //   })
    // });
    // setTimeout(this.getAll(), 1000);
  }

  submit = () => {
    let tempProjectObject = JSON.parse(JSON.stringify(this.state.tempProject));

    this.setState({
      tempProject: this.state.baseState,
    })
    fetch('/api/mongodb/ProjectDetails/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tempProjectObject),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back on POST', data);
      })
      .then(setTimeout(this.getAll(), 1000));

    // setTimeout(this.getAll(), 2000);
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
                <div onClick={() => this.onDelete(project._id)}
                  style={{marginRight: '5px', display: 'inline-block', color: 'red'}}>X </div>
                <div key={index}
                  className="projectName"
                  style={{display: 'inline-block', width: '250px'}}>
                    {project.projectName}
                    {/*index*/}
                    {/* {homes.map(home => <div>{home.name}</div>)} */}
                    {/* <button onClick={() => this.onChooseKeeper(index)}>Choose</button> */}
                </div>
                {
                  project.phases.map((phase, index) => {
                    let duration = phase.phaseEnd - phase.phaseStart;
                    const width = (duration * 15).toString() + 'px';
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


        <div className="gantt">
          <div className="toprow">
          </div>
          <div className="project">
            <div className="projectName" style={{display: 'inline-block', width: '250px'}}> Project 1 Name</div>
            <span className="phases">
              <div className="phase" style={{backgroundColor: '#e12726', width: '120px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: '#505cfd', width: '90px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: '#007bff', width: '75px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: '#ffc107', width: '105px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
            </span>
          </div>


          <div className="project">
            <div className="projectName" style={{display: 'inline-block', width: '250px'}}> Project 2 Name</div>
            <span className="phases">
              <div className="phase" style={{backgroundColor: '#e12726', width: '100px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: '#505cfd', width: '100px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: '#007bff', width: '95px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: '#ffc107', width: '125px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
            </span>
          </div>

          <div className="project">
            <div className="projectName" style={{display: 'inline-block', width: '250px'}}> Project 3 Name</div>
            <span className="phases">
              <div className="phase" style={{backgroundColor: '#e12726', width: '80px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: '#505cfd', width: '70px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: '#007bff', width: '55px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
              <div className="phase" style={{backgroundColor: '#ffc107', width: '95px', height: '15px', display: 'inline-block', margin: '2px', borderRadius: '8px'}}> </div>
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
