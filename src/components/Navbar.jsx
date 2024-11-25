import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <Link className="hover:underline" to="/">
        Home
      </Link>
      <Link className="hover:underline" to="/profile">
        Services
      </Link>
      <Link className="hover:underline" to="/profile">
        My Profile
      </Link>
    </>
  );

  return (
    <div className="navbar py-5 container w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="text-base md:text-2xl uppercase text-white font-poppins font-bold"
        >
          Career Compass
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-white font-poppins font-semibold text-base">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
