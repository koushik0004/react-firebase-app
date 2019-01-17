import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CreateProject } from '../../store/actions/projects.action';

class CreateProjectComponent extends Component {
  state = {
    title: '',
    content: ''
  };
  handleChange = (evt) => {
    const evt1 = evt.target;
    this.setState((state) => ({
      ...state,
      [evt1.id]: evt1.value
    }))
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.CrateProject(this.state);
    this.setState(() => ({
      title: '',
      content: ''
    }))
  };
  render() {
    const {auth} = this.props;
    if(!auth.uid) {
      return (<Redirect to="/signin" />);
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title"
            value={this.state.title}
            onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" cols="30" rows="10"
            className="materialize-textarea"
            value={this.state.content}
            onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">Add Project</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});
const mapDispatchToProps = (dispatch) => ({
  CrateProject: (project) => dispatch(CreateProject(project))
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectComponent);