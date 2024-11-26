import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { handleGoogleLogin } = useContext(AuthContext);

  return (
    <div className="mt-24 font-poppins">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <h2 className="text-3xl text-career-primary text-center font-semibold">
              Welcome Back
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
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
