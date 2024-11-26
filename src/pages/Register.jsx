import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { handleRegister, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleRegister(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-24 font-poppins">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-3xl text-career-primary text-center font-semibold">
              Create an account
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="url"
                className="input input-bordered"
                required
              />
            </div>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3 mb-1">
              <button className="btn bg-career-primary text-white border-career-primary hover:bg-blue-400 hover:border-blue-400">
                Register
              </button>
            </div>
            <div className="divider">Or</div>
            <div className="form-control my-1">
              <button className="btn bg-base-200 hover:bg-base-100">
                <FcGoogle className="text-3xl" /> Signup with Google
              </button>
            </div>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
