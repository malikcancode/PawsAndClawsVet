import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const servicesData = [
  { id: 1, title: "Hospitalization", image: "/Hospitalization.webp" },
  { id: 2, title: "Surgery & Operations", image: "/Surgery.webp" },
  { id: 3, title: "Vaccinations", image: "/images.jpeg" },
  { id: 4, title: "Dental Care", image: "/Dental-Scaling.webp" },
  {
    id: 5,
    title: "Veterinary Laboratory",
    image: "/Veterinarian-Laboratory.webp",
  },
  {
    id: 6,
    title: "Equines Services",
    image: "/Equines-Care-and-Services.jpeg",
  },
];

function Services() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="text-center px-4 sm:px-10 py-10 bg-[#f07167]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
        Our Services
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
        We offer comprehensive services for large and small animals, focusing on
        preventative care such as annual wellness exams, vaccinations,
        nutritional counseling, and parasite prevention. Our skilled team is
        here when your animals need diagnostics, orthopedic services, and more.
      </p>

      <div className="relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute bottom-0 left-0 z-10 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-hidden scroll-smooth whitespace-nowrap px-10"
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative min-w-[250px] card sm:min-w-[270px] overflow-hidden transition-transform rounded-t-[200px] duration-300 hover:scale-105"
            >
              <div className="relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 image-slider object-cover"
                />
                <div className="absolute image-slider inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <Link
                    to={`/service/${service.id}`}
                    className="bg-[#f07167] text-white px-4 py-2 rounded-lg shadow-md"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute bottom-0 right-0 z-10 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Services;
