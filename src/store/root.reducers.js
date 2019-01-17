import projectsReducers from './reducers/projects.reducers';
import authReducers from './reducers/auth.reducers';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';


const rootReducers = combineReducers({
  project: projectsReducers,
  auth: authReducers,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducers;