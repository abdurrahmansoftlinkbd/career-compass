import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container w-11/12 mx-auto p-10">
      <aside className="*:text-white">
        <Link
          to="/"
          className="text-base md:text-3xl uppercase text-white font-poppins font-bold mb-2"
        >
          Career Compass
        </Link>
        <p className="font-inter">Level-4, 34, Awal Centre, Banani, Dhaka</p>
        <p>Helpline: 01322901105 , 01322810867</p>
        <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
      </aside>
      <nav className="*:text-white">
        <h6 className="footer-title opacity-100">Company</h6>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <form>
        <h6 className="footer-title text-white opacity-100">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn bg-blue-300 border-blue-300 hover:bg-blue-200 hover:border-blue-200 join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
