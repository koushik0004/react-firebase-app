import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SignOut } from '../../store/actions/auth.action';


const SignedInComponent = (props) => {
  return (
		<ul className="right">
      <li><NavLink to="/create-project">New Project</NavLink></li>
      <li><a href="/" onClick={props.SignOut}>Logout</a></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initial}</NavLink></li>
    </ul>
	)
};

export default connect(
  null,
  (dispatch) => {
    return {
      SignOut: () => dispatch(SignOut())
    }
  } 
)(SignedInComponent);