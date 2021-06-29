import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFw_U08F9ayk4DWhjD-cK9TDEefXOAPpo",
    authDomain: "webpro-25bf9.firebaseapp.com",
    databaseURL: "https://webpro-25bf9-default-rtdb.firebaseio.com",
    projectId: "webpro-25bf9",
    storageBucket: "webpro-25bf9.appspot.com",
    messagingSenderId: "1080755668474",
    appId: "1:1080755668474:web:6041474fa3244370305043"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;