import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    //reset error
    setRegisterError("");
    setSuccess("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess("User Logged in Succesfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please provide an email");
      setRegisterError();
      return;
    }

    //send validataion email

    sendPasswordResetEmail(auth, email)
    .then(() => {
        alert('Check your email')
    })
    .catch(error => {
        console.log(error)
    })

  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgotPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {registerError && (
            <p className="text-red-700 text-center">{registerError}</p>
          )}
          {success && <p className="text-green-400 text-center">{success}</p>}
          <p>
            New to this website Please <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
