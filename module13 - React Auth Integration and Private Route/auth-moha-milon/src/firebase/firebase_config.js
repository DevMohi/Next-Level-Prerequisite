// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIaIQgT5IfJPwweWhMExs2h0ghx5hCUjk",
  authDomain: "auth-moha-milon-9650e.firebaseapp.com",
  projectId: "auth-moha-milon-9650e",
  storageBucket: "auth-moha-milon-9650e.firebasestorage.app",
  messagingSenderId: "737896293806",
  appId: "1:737896293806:web:62d57ab842f012f741143f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth; 