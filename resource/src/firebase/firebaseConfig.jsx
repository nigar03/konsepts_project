import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyC2_gcPRDeLwZYgbtMxIgPMx5PpdJfbDhw",
  authDomain: "konsept-3.firebaseapp.com",
  databaseURL: "https://konsept-3-default-rtdb.firebaseio.com",
  projectId: "konsept-3",
  storageBucket: "konsept-3.appspot.com",
  messagingSenderId: "661367738133",
  appId: "1:661367738133:web:08df0cf64e3afd45ade31c"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}