import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CircularTextComponent from "../components/CircularTextComponent";

function Hero() {
  return (
    <div className="bg-[#f07167] text-white h-[calc(100vh-4rem)] flex flex-col md:flex-row items-end justify-between p-8 px-6 md:p-16">
      <div className="md:w-1/2 text-start md:text-left flex flex-col justify-between h-full">
        <h1 className="text-4xl md:text-6xl leading-normal font-bold mb-4">
          WHERE HOMETOWN VALUES MEET VETERINARY EXPERTISE
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We’re a small-town neighborhood clinic that offers all the advantages
          of modern veterinary technology.
        </p>
        <div className="flex gap-6 items-center justify-center text-center h-full">
          <Link
            to="/contact-doctor"
            className="btn w-full text-[#f07167] px-10 sm:px-12 py-8 sm:py-10 font-semibold text-xs sm:text-sm"
          >
            Call a doctor
            <FaLocationArrow className="absolute top-2 right-2 p-2 rounded-full text-4xl text-[#f07167]" />
          </Link>
          <Link
            to="/Appointment"
            className="btn w-full text-center text-[#f07167] sm:px-10 px-8 py-8 sm:py-10 font-semibold text-xs sm:text-sm"
          >
            Make an appointment
            <FaLocationArrow className="absolute top-2 p-2 rounded-full right-2 text-4xl text-[#f07167]" />
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 h-[100%] flex items-center justify-center md:mt-0]">
        <img
          src="/public/girlimage.png"
          alt="Hero"
          loading="lazy"
          className="image w-full  filter hidden md:block drop-shadow-[0_10px_10px_rgba(255,182,193,0.7)] object-cover h-full"
        />
      </div>
      <div className="absolute bottom-0 md:right-16 z-20 right-[40%]">
        <CircularTextComponent />
      </div>
    </div>
  );
}

export default Hero;
