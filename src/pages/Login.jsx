import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { handleGoogleLogin, handleLogin, setUser } = useContext(AuthContext);

  const [error, setError] = useState({});

  const location = useLocation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    handleLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="mt-24 font-poppins">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-3xl text-career-primary text-center font-semibold">
              Welcome Back
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
              {error.login && (
                <label className="label text-sm text-red-600">
                  {error.login}
                </label>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3 mb-1">
              <button className="btn bg-career-primary text-white border-career-primary hover:bg-blue-400 hover:border-blue-400">
                Login
              </button>
            </div>
            <div className="divider">Or</div>
            <div className="form-control my-1">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-base-200 hover:bg-base-100"
              >
                <FcGoogle className="text-3xl" /> Login with Google
              </button>
            </div>
            <p className="text-center mt-4">
              Dont have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
