import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  console.log(app);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider) 
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
    })
    .catch((error) => {
        console.log(error.message);
    })
  }

  return (
    <div>
      {
        user ? <button onClick={handleSignOut}>Sign Out</button> :  <div><button onClick={handleGoogleSignIn}>Google Login</button> 
        <button onClick={handleGithubSignIn}>Github Login</button> </div>
      }

    
      {user && (
        <div>
          <h3>User : {user?.displayName}</h3>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
