import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { SignIn } from '../../store/actions/auth.action';

class SignInComponent extends Component {
  state = {
    password: '',
    email: ''
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
    this.props.SignIn(this.state);
  };
  render() {
    if(this.props.auth.uid) {
      return (<Redirect to="/dashboard" />);
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In Form</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">Login</button>
          </div>
          {this.props.authError &&
            <div className="red-text center">
              <p>{this.props.authError}</p>
            </div>
          }
          {/* {!this.props.authError &&
            <div className="green-text center">
              <p>Login Successfull</p>
            </div>
          } */}
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
};
const mapDispatchToProps = (dispatch) => ({
  SignIn: (creds) => dispatch(SignIn(creds))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);