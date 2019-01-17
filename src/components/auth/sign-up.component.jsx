import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from '../../store/actions/auth.action';

class SignUpComponent extends Component {
  state = {
    password: '',
    email: '',
    firstName: '',
    lastName: ''
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
    console.log(this.state);
    this.props.signUp(this.state);
  };
  render() {
    if(this.props.auth.uid) {
      return (<Redirect to="/dashboard" />);
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">Register</button>
          </div>
          {this.props.authError &&
            <div className="red-text center">
              {this.props.authError.message}
            </div>
          }
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  authError: state.auth.authError
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (newUser) => dispatch(signUp(newUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
