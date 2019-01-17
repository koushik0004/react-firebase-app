import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import NotificationComponent from './notifications.component';
import ProjectListComponent from '../projects/project-list.component';

class DashboardComponent extends React.Component {
  // constructor(props){
  //   super(props);
  //   console.log(props);
  // }
  render() {
    const {projects, auth} = this.props;
    if(!auth.uid) {
      return (<Redirect to="/signin" />);
    }

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectListComponent projects={projects}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <NotificationComponent />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.firestore);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  firestoreConnect([
    {collection: 'projects'}
  ]),
  connect(mapStateToProps)
)(DashboardComponent);