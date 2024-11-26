import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const services = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Career Compass | Home</title>
      </Helmet>
      {/* slider */}
      <header>
        <Slider></Slider>
      </header>
      {/* services */}
      <section className="mt-24 container w-11/12 mx-auto font-poppins">
        <h2 className="text-4xl font-bold uppercase mb-6 text-center text-career-primary">
          Services
        </h2>
        <div className="container mx-auto w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 ">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
