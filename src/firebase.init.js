// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGxtQiuaHrJAJglpeTtmLKSvDjAXTPmy0",
  authDomain: "genius-car-services-17df8.firebaseapp.com",
  projectId: "genius-car-services-17df8",
  storageBucket: "genius-car-services-17df8.appspot.com",
  messagingSenderId: "950802347487",
  appId: "1:950802347487:web:32eb025eeeb58fee0c406a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;