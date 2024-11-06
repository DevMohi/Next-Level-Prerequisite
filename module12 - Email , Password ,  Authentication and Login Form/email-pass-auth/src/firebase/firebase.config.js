// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHjx-xmJKJBK_Y3cPEDnrkvA9rTNrM-P0",
  authDomain: "user-email-auth-ffa14.firebaseapp.com",
  projectId: "user-email-auth-ffa14",
  storageBucket: "user-email-auth-ffa14.firebasestorage.app",
  messagingSenderId: "249209402554",
  appId: "1:249209402554:web:6eead326d48b1f7066be83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 
