export const SignIn = (credential) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credential.email,
      credential.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS', payload: 'SignIn Success'});
    }).catch(() => {
      dispatch({type: 'LOGIN_ERROR', payload: 'SignIn Failed'});
    })
  }
}

export const SignOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({type: 'LOGOUT_SUCCESS', payload: 'Logout successfully!'});
    })
  }
}

export const signUp = (newUser) => (
  (dispatch, getState, {getFirestore, getFirebase}) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => (
          firestore.collection('users').doc(resp.user.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initial: newUser.firstName.charAt(0) + newUser.lastName.charAt(0)
          })
        )
      ).then(() => (dispatch({type: 'SIGNUP_SUCCESS'})))
      .catch(err => (dispatch({type: 'SIGNUP_ERROR', payload: err})));
  }
);