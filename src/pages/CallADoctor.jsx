import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed Khan",
    image: "/man.png",
    role: "Veterinary Surgeon",
    phone: "+92 300-1234567",
  },
  {
    id: 2,
    name: "Dr. Usama Ali",
    image: "/man.png",
    role: "Livestock Specialist",
    phone: "+92 300-7654321",
  },
  {
    id: 3,
    name: "Dr. Feroz Raza",
    image: "/man.png",
    role: "Animal Nutritionist",
    phone: "+92 300-9876543",
  },
  {
    id: 4,
    name: "Dr. Ghulam Hussain",
    image: "/man.png",
    role: "Veterinary Pathologist",
    phone: "+92 300-5678901",
  },
  {
    id: 5,
    name: "Dr. Bashir Ahmed",
    image: "/man.png",
    role: "Equine Veterinarian",
    phone: "+92 300-2345678",
  },
  {
    id: 6,
    name: "Dr. Akbar Shah",
    image: "/man.png",
    role: "Dairy Farm Consultant",
    phone: "+92 300-8765432",
  },
  {
    id: 7,
    name: "Dr. Shabbir Ali",
    image: "/man.png",
    role: "Small Animal Specialist",
    phone: "+92 300-3456789",
  },
  {
    id: 8,
    name: "Dr. Iqbal Farooq",
    image: "/man.png",
    role: "Veterinary Pharmacologist",
    phone: "+92 300-6543210",
  },
];

const CallADoctor = () => {
  return (
    <div className="min-h-screen bg-[#f07167] flex flex-col items-center py-10 px-4">
      {" "}
      <h1 className="text-3xl font-bold text-white mb-2">Call a Doctor</h1>
      <h3 className="text-zinc-100 mb-4 tracking-wider">
        Expert Care, Just a Call Away!
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="p-4 bg-white shadow-lg rounded-2xl text-center"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              loading="lazy"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-900">
              {doctor.name}
            </h2>
            <p className="text-gray-600 text-sm">{doctor.role}</p>
            <p className="text-gray-700 font-medium mt-2">{doctor.phone}</p>
            <button
              className="mt-4 flex items-center justify-center gap-2 text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
              onClick={() => (window.location.href = `tel:${doctor.phone}`)}
            >
              <FaPhoneAlt size={18} /> Call Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallADoctor;
