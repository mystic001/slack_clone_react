import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCns363C0yD-zGiejSYQXRsqpwyz6it0BY",
    authDomain: "slack-clone-ad961.firebaseapp.com",
    projectId: "slack-clone-ad961",
    storageBucket: "slack-clone-ad961.appspot.com",
    messagingSenderId: "300485620182",
    appId: "1:300485620182:web:bab42f6381d2dbb6b2b477",
    measurementId: "G-2LKH2HRJKP"
  };

  const fireInstance = firebase.initializeApp(firebaseConfig);

  const db = fireInstance.firestore();

  const firebaseAuth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {firebaseAuth , provider};
  export default db;