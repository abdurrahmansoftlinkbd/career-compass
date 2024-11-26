import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../services.json"),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) => {
          const serviceDetailsRes = await fetch("../services.json");
          const serviceDetails = await serviceDetailsRes.json();
          const serviceDetail = serviceDetails.find(
            (singleServiceDetail) => singleServiceDetail.id == params.id
          );
          return serviceDetail;
        },
      },
    ],
  },
]);

export default router;
