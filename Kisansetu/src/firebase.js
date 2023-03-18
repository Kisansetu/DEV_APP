// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// import '@firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0C-8pt6NlSsdTMqM7ypsYNLmMfa2w8Mg",
  authDomain: "kisansetuproject.firebaseapp.com",
  databaseURL: "https://kisansetuproject-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kisansetuproject",
  storageBucket: "kisansetuproject.appspot.com",
  messagingSenderId: "571200743429",
  appId: "1:571200743429:web:a751746761fb4851e9546c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;