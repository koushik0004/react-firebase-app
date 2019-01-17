import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInComponent from './signedin.component';
import SignedOutComponent from './signedout-component';

const NavBar = (props) => {
  const { auth, profile } = props;
  //console.log(auth);
  const authLinks = auth.uid ? <SignedInComponent profile={profile}/> : <SignedOutComponent />;
  return (
		<nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-name">MarioPlay</Link>
        { authLinks }
      </div>
    </nav>
	)
};

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
}
export default connect(
  mapStateToProps
)(NavBar);