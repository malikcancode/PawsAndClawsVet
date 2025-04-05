import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-start sm:text-center sm:px-10 py-10">
      <h3 className="text-2xl sm:text-center w-full text-start sm:text-3xl font-bold mb-4 text-gray-700 tracking-wide ">
        Welcome to
      </h3>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#f07167]">
        FarmVet Veterinary Clinic
      </h2>
      <p className="text-lg sm:text-xl mb-6 max-w-4xl text-gray-800">
        We’re a trusted veterinary clinic dedicated to providing exceptional
        care for all animals, from small pets to large farm animals. Our modern
        facility and farmhouse services ensure comprehensive and compassionate
        treatment for animals in your community.
      </p>
      <Link to="/contact" className="bg-[#f07167] text-white px-16 py-2">
        Contact Us
      </Link>
    </div>
  );
}

export default Intro;
