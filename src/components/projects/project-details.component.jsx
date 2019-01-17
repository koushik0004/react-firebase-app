import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';

const ProjectDetailsComponent = (props) => {
  //console.log(props);
  if(!props.auth.uid) {
    return (
      <Redirect to="/signin" />
    );
  }
  return (
    <div className="project-details section">
      <div className="card z-depth-0">
        {!props.project &&
          <div className="card-content">
            <p>Data loading.....</p>
          </div>
        }
        {props.project &&
          <React.Fragment>
            <div className="card-content">
              <span className="card-title">{props.project.title}</span>
              <p>{props.project.content}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
              <div>{` Posted by ${props.project.authorFirstName} ${props.project.authorLastName}`}</div>
              <dir>{moment(props.project.createdAt.toDate()).calendar()}</dir>
            </div>
          </React.Fragment>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  //console.log(state, ownProps);
  const allProject = state.firestore.data.projects;
  const singleProject = allProject ? allProject[ownProps.match.params.id] : null;
  return {
    project: singleProject,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetailsComponent);