import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const location = useLocation();
  console.log(location, 'location inside login page')

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        form.reset();

        //Navigate user
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={handleLogin}>
          <h2 className="text-3xl text-center mb-5">Please Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
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
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have an account ?
          <Link className="text-blue-500" to="/register">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
