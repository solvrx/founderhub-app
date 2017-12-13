import * as firebase from "firebase";

  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyCisk3GvlTnJSZRVxsb11WCGif7jG9xm10",
    authDomain: "veterans-stakeholder-group.firebaseapp.com",
    databaseURL: "https://veterans-stakeholder-group.firebaseio.com",
    projectId: "veterans-stakeholder-group",
    storageBucket: "veterans-stakeholder-group.appspot.com",
    messagingSenderId: "77616965078"
  };
 
  firebase.initializeApp(config);

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
    // ...
  }); 

  export default firebase;