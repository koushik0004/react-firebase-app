import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import NavBar from './components/layout/navbar.component';
import DashboardComponent from './components/dashboard/dashboard.component';
import ProjectDetailsComponent from './components/projects/project-details.component';
import SignInComponent from './components/auth/sign-in.component';
import SignUpComponent from './components/auth/sign-up.component';
import CreateProjectComponent from './components/projects/create-project.component';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={DashboardComponent} />
            <Route exact path="/dashboard" component={DashboardComponent} />
            <Route path="/project/:id" component={ProjectDetailsComponent} />
            <Route path="/signin" component={SignInComponent} />
            <Route path="/signup" component={SignUpComponent} />
            <Route path="/create-project" component={CreateProjectComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
