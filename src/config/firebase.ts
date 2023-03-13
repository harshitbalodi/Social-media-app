// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADXFISJpk-t8UPRPxxbhAU0zwN5X54Iqk",
  authDomain: "social-media-project-40813.firebaseapp.com",
  projectId: "social-media-project-40813",
  storageBucket: "social-media-project-40813.appspot.com",
  messagingSenderId: "411131698520",
  appId: "1:411131698520:web:2d66a3c70dcea6d558192d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);