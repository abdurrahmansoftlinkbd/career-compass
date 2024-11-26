import { useLoaderData } from "react-router-dom";
import Comments from "../components/Comments";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const {
    image,
    serviceName,
    category,
    description,
    pricing,
    duration,
    counselor,
    rating,
  } = useLoaderData();

  return (
    <>
      <Helmet>
        <title>{serviceName}</title>
      </Helmet>
      <div className="hero container w-11/12 mx-auto mt-24 font-poppins">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold uppercase text-career-primary">
              {serviceName}
            </h1>
            <p>
              <span className="font-semibold">Description:</span> {description}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {pricing}
            </p>
            <p className="font-semibold text-career-primary"> {duration}</p>
            <p>
              <span className="font-semibold">Counselor:</span> {counselor}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {rating}
            </p>
          </div>
        </div>
      </div>
      <Comments></Comments>
    </>
  );
};

export default ServiceDetails;
