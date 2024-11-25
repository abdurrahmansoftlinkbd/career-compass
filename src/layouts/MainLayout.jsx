import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <nav className="bg-career-primary">
        <Navbar></Navbar>
      </nav>
      {/* dynamicSection */}
      <Outlet></Outlet>
      {/* footer */}
      <footer className="bg-career-primary mt-24 py-5 font-poppins">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
