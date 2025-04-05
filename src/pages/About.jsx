const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed Khan",
    image: "/man.png",
    role: "Veterinary Surgeon",
  },
  {
    id: 2,
    name: "Dr. Usama Ali",
    image: "/man.png",
    role: "Livestock Specialist",
  },
  {
    id: 3,
    name: "Dr. Feroz Raza",
    image: "/man.png",
    role: "Animal Nutritionist",
  },
  {
    id: 4,
    name: "Dr. Ghulam Hussain",
    image: "/man.png",
    role: "Veterinary Pathologist",
  },
  {
    id: 5,
    name: "Dr. Bashir Ahmed",
    image: "/man.png",
    role: "Equine Veterinarian",
  },
  {
    id: 6,
    name: "Dr. Akbar Shah",
    image: "/man.png",
    role: "Dairy Farm Consultant",
  },
  {
    id: 7,
    name: "Dr. Shabbir Ali",
    image: "/man.png",
    role: "Small Animal Specialist",
  },
  {
    id: 8,
    name: "Dr. Iqbal Farooq",
    image: "/man.png",
    role: "Veterinary Pharmacologist",
  },
];

function About() {
  return (
    <div className="bg-[#f07167] text-white py-16">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          About FarmVet | Veterinary Clinic
        </h2>
        <p className="text-lg leading-relaxed">
          Located in Wan Bhachran, Jahaz Chowk, FarmVet is a state-of-the-art
          veterinary clinic dedicated to providing high-quality care for your
          beloved animals. From routine checkups to emergency surgeries, our
          expert team ensures the best medical treatment for pets and farm
          animals.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 px-6">
        <h3 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Expert Veterinarians</h4>
            <p>
              Our doctors have years of experience in treating both small pets
              and large farm animals.
            </p>
          </div>
          <div className="card text-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Modern Facilities</h4>
            <p>
              Equipped with the latest technology for diagnostics, surgeries,
              and treatments.
            </p>
          </div>
          <div className="card text-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Compassionate Care</h4>
            <p>
              We treat every animal with love, care, and dedication to ensure
              their well-being.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-6">
          Meet Our Doctors
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="text-center card p-4 rounded-lg shadow-lg w-64"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                loading="lazy"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-3">{doctor.name}</h4>
              <p className="text-gray-800">{doctor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
