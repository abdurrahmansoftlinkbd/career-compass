import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <nav className="bg-career-primary">
        <Navbar></Navbar>
      </nav>
      {/* dynamicSection */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
