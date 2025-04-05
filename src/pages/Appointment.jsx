import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Appointment() {
  const [species, setSpecies] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [numSpecies, setNumSpecies] = useState(1);
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointmentBooked(true);
  };

  const handleAddSpecies = () => {
    if (species && !selectedSpecies.includes(species)) {
      setSelectedSpecies([...selectedSpecies, species]);
      setSpecies("");
    }
  };

  const handleRemoveSpecies = (specie) => {
    setSelectedSpecies(selectedSpecies.filter((item) => item !== specie));
  };

  if (appointmentBooked) {
    return (
      <div className="h-full p-10 flex items-center justify-center bg-[#f1f5f9]">
        <div className="text-center p-10 rounded-lg shadow-xl card max-w-7xl w-full">
          <FaCheckCircle className="text-[#34d399] text-6xl mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-gray-800">
            Appointment Confirmed
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Thank you for booking with us!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#e2e8f0] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Species</h3>
              <p className="text-sm text-gray-600">
                {selectedSpecies.join(", ")}
              </p>
            </div>

            {/* Number of Species */}
            <div className="bg-[#e2e8f0] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">
                Number of Species
              </h3>
              <p className="text-sm text-gray-600">{numSpecies}</p>
            </div>

            {/* Time Slot */}
            <div className="bg-[#e2e8f0] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Time Slot</h3>
              <p className="text-sm text-gray-600">
                {new Date(timeSlot).toLocaleString()}
              </p>
            </div>

            {/* Name */}
            <div className="bg-[#e2e8f0] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Name</h3>
              <p className="text-sm text-gray-600">{name}</p>
            </div>

            {/* Email */}
            <div className="bg-[#e2e8f0] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Email</h3>
              <p className="text-sm text-gray-600">{email}</p>
            </div>

            <div className="bg-[#e2e8f0] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Phone</h3>
              <p className="text-sm text-gray-600">{phone}</p>
            </div>
          </div>

          <Link
            to="/"
            onClick={() => setAppointmentBooked(false)}
            className="mt-6 px-6 py-2 bg-[#f07167] text-white font-semibold inline-block"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-8 flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-8xl bg-white p-4 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-start">
            Book Appointment
          </h2>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="species"
            >
              Select Species
            </label>
            <select
              id="species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">--Choose Species--</option>
              <option value="Cow">Cow</option>
              <option value="Buffalo">Buffalo</option>
              <option value="Horse">Horse</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
            </select>
            <button
              type="button"
              onClick={handleAddSpecies}
              className="mt-2 w-50 bg-[#f07167] text-white py-2 px-4 rounded-md"
            >
              Add Species
            </button>

            {selectedSpecies.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700">
                  Selected Species:
                </h3>
                <ul className="flex flex-col sm:flex-row gap-2 pl-5 mt-2">
                  {selectedSpecies.map((specie, index) => (
                    <li
                      className="bg-[#f07167] text-white text-sm p-2 rounded-sm px-6 py-2 flex justify-between items-center"
                      key={index}
                    >
                      {specie}
                      <button
                        type="button"
                        onClick={() => handleRemoveSpecies(specie)}
                        className="ml-2 text-white"
                      >
                        <FaTimes />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Display message if species is already selected */}
            {species && selectedSpecies.includes(species) && (
              <p className="mt-2 text-xs text-gray-500">
                This species is already added.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="numSpecies"
            >
              Number of Species
            </label>
            <input
              type="number"
              id="numSpecies"
              value={numSpecies}
              onChange={(e) => setNumSpecies(Number(e.target.value))}
              min="1"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Time Slot Selection */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="timeSlot"
            >
              Choose a Time Slot
            </label>
            <input
              type="datetime-local"
              id="timeSlot"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Personal Details */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f07167] text-white py-2 px-4 rounded-md"
          >
            Book Appointment
          </button>
        </form>

        <div className="hidden md:block w-1/2 ml-8">
          <img
            src="/pic.jpg"
            alt="Appointment"
            loading="lazy"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Appointment;
