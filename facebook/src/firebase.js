import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyB8qxKSnO_wk-sPP3bGYK2jZ3wPTvmL5kM",
  authDomain: "facebook-dcc35.firebaseapp.com",
  databaseURL: "https://facebook-dcc35.firebaseio.com",
  projectId: "facebook-dcc35",
  storageBucket: "facebook-dcc35.appspot.com",
  messagingSenderId: "1474324843",
  appId: "1:1474324843:web:657d4d16a1311ae707442e",
  measurementId: "G-BQF6KWFMP0"

});

const db=firebaseApp.firestore();
export default db;