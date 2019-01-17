export const CreateProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: uid,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_PROJECT', payload: project});
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERR', payload: err});
    });
  }
}