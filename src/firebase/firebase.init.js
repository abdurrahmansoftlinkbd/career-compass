// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsyQ5TB6oVZkc-VPXw10namSTSTVXbm2Y",
  authDomain: "b10-a9-career-compass.firebaseapp.com",
  projectId: "b10-a9-career-compass",
  storageBucket: "b10-a9-career-compass.firebasestorage.app",
  messagingSenderId: "688553745599",
  appId: "1:688553745599:web:87b31081db877a90d1ba0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
