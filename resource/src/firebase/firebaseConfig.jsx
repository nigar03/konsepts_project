import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
 apiKey: "AIzaSyA8_nu6XB6TsJYkWoU7bxCrwQjU3_Hm914",
  authDomain: "kons-cb1b9.firebaseapp.com",
  databaseURL: "https://kons-cb1b9-default-rtdb.firebaseio.com",
  projectId: "kons-cb1b9",
  storageBucket: "kons-cb1b9.appspot.com",
  messagingSenderId: "75150828319",
  appId: "1:75150828319:web:2a7ae1f90a12ec6853c62a",
  measurementId: "G-DG1GLBV90S"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}
