import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  return (
    <>
      {/* slider */}
      <header>
        <Slider></Slider>
      </header>
      {/* services */}
      <section className="mt-24 container w-11/12 mx-auto font-poppins">
        <h2 className="text-4xl font-bold uppercase mb-6 text-center">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
