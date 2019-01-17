import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0xW1aCwJefmT5cXdQD-ZYOtWiQrOpJ2s",
  authDomain: "react-redux-firebase-98fda.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-98fda.firebaseio.com",
  projectId: "react-redux-firebase-98fda",
  storageBucket: "react-redux-firebase-98fda.appspot.com",
  messagingSenderId: "1021543537521"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots : true });

export default firebase;

