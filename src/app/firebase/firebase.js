/** @format */
import firebase from "firebase";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLNFymj671YJh4JBWbRA5QHEE1bJRv0AY",
  authDomain: "printrest-clone.firebaseapp.com",
  projectId: "printrest-clone",
  storageBucket: "printrest-clone.appspot.com",
  messagingSenderId: "317065006141",
  appId: "1:317065006141:web:a5909cae4c5a8311d06e54",
  measurementId: "G-0DHD65BM9W",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
export default app;
