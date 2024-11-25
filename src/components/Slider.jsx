import { FaArrowRight } from "react-icons/fa";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="h-[580px] bg-no-repeat w-full bg-center bg-slide1"></div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute w-4/5 top-28 left-28">
          <h1 className="text-white font-poppins text-7xl font-bold">
            Explore Career Counseling Services
          </h1>
          <p className="text-white font-inter mt-4 w-4/5">
            Embark on a journey toward a fulfilling and successful career. Our
            career counseling services are designed to guide you through every
            step of your professional journey, offering personalized advice,
            insights, and resources.
          </p>
          <button className="btn bg-career-primary border-career-primary mt-6 rounded-full uppercase text-white hover:bg-blue-400 hover:border-blue-400">
            Get Started <FaArrowRight />
          </button>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="h-[580px] bg-no-repeat w-full bg-center bg-slide2"></div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute w-4/5 top-40 left-28">
          <h1 className="text-white font-poppins text-7xl font-bold">
            Personalized Career Advice
          </h1>
          <p className="text-white font-inter mt-4 w-4/5">
            Unlock personalized career advice designed to suit your individual
            goals and aspirations. Our expert counselors work with you to
            understand your skills, interests, and values, providing tailored
            guidance to help you navigate your career path with confidence.
          </p>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="h-[580px] bg-no-repeat w-full bg-center bg-slide3"></div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute w-4/5 top-40 left-28">
          <h1 className="text-white font-poppins text-7xl font-bold">
            Build Your Dream Career
          </h1>
          <p className="text-white font-inter mt-4 w-4/5">
            Step confidently toward building the career you have always dreamed
            of. Our platform equips you with the tools, insights, and support
            needed to transform your passions into a rewarding professional
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
