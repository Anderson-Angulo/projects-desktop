import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBw-RZY3b3jRhgh5gG2QF4QNVAAlIPDdvk",
  authDomain: "react-netflix-clone-cd244.firebaseapp.com",
  projectId: "react-netflix-clone-cd244",
  storageBucket: "react-netflix-clone-cd244.appspot.com",
  messagingSenderId: "434175055554",
  appId: "1:434175055554:web:232e32550e8a7f5326cd5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);