import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBzUM499seXSWgZDaxdPY7aIs7BuNaBToU",
    authDomain: "unichat-4728f.firebaseapp.com",
    projectId: "unichat-4728f",
    storageBucket: "unichat-4728f.appspot.com",
    messagingSenderId: "610183342736",
    appId: "1:610183342736:web:fc6116d383b2237c760615"
  }).auth();