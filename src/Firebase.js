import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfySlJScjwDlv1xjbOcArF_rrkpkz9hFs",
  authDomain: "react-msg-app.firebaseapp.com",
  projectId: "react-msg-app",
  storageBucket: "react-msg-app.appspot.com",
  messagingSenderId: "962298136676",
  appId: "1:962298136676:web:01ee1454cca842aea43771",
  measurementId: "G-BTQ42HLRRT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
//google authentication
const  provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;  