import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { image, serviceName, category, pricing, counselor } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {serviceName}
          <div className="badge badge-accent">{category}</div>
        </h2>
        <p>Price: {pricing}</p>
        <p>Counselor: {counselor}</p>
        <div className="card-actions">
          <button className="btn bg-career-primary text-white hover:bg-blue-400 hover:border-blue-400 uppercase">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
