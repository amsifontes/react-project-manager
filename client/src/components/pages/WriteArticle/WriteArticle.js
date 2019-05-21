import React, { Component } from 'react';
import './WriteArticle.css';

class WriteArticle extends Component {
  state = {
    title: '',
    text: '',
    project_name: "Project Name",
    project_start: 1,
    project_end: "2",
    collection: "NewMongoCollection",
  }

  onChangeContent = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  }

  onChangeTitle = (ev) => {
    this.setState({
      title: ev.target.value,
    });
  }

  changedsubmit = () => {
    const formData = {
      // title: this.state.title,
      // text: this.state.text,
      //this.state,
      project_name: "Project Name",
      project_start: 1,
      project_end: "2",
    };
    console.log('submit invoked');
    fetch('/api/mongodb/blogpost/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
        // collectionName: 'testCollection',
      })
      //.then(data => console.log(data))
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);
        // Redirect to blog
        // this.props.history.push('/blog/');
      });
      // .then(data => console.log(data))
      // // .then(response => response.json())
      // .then(data => {
      //   console.log('Got this back', data);

      //   // Redirect to blog
      //   // this.props.history.push('/blog/');
      // });
  };


  submit = () => {
    const formData = {
      title: this.state.title,
      text: this.state.text,
      state: this.state
    };

    fetch('/api/mongodb/blogposts/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        this.props.history.push('/blog/');
      });
  }



  render() {
    return (
      <div className="WriteArticle">
        <h1>Write an article</h1>
        <input
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
        <br />

        <textarea
            name="content"
            placeholder="Contents"
            value={this.state.details}
            onChange={this.onChangeContent}
          />

        <br />

        <button onClick={this.submit}>Add to blog</button>
      </div>

    );
  }
}

export default WriteArticle;
