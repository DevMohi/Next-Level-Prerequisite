import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    //reset error
    setRegisterError("");
    setSuccess("");

    console.log("Form submitted");

    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or more");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have atleast one uppercase letters"
      );
      return;
    } else if (!terms) {
        setRegisterError("Please accept the terms and conditions");
        return; 
    }

    //Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess("User Created Successfully");

        //Send verification email
        sendEmailVerification(result.user)
        .then(() => {
            alert('Please check your email to verity');
        })
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div className="border">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl text-center mb-4">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full py-2 px-4"
            type="email"
            name="email"
            id=""
            placeholder="Your email address"
            required
          />
          <br />
          <div className="relative">
            <input
              className="w-full py-2 px-4 "
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="Your password"
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <div className="">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our Terms and Conditions
            </label>
          </div>
          <br />

          <input
            className="w-full mb-4 btn btn-primary"
            type="submit"
            value="Register"
            id=""
          />
        </form>
        {registerError && (
          <p className="text-red-700 text-center">{registerError}</p>
        )}
        {success && <p className="text-green-400 text-center">{success}</p>}
        <p>Already have an account <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
