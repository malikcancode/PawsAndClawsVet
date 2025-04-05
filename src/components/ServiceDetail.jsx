import { useParams } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Hospitalization",
    image: "/Hospitalization.webp",
    description:
      "Our hospitalization services offer comprehensive care for pets requiring medical attention. This includes emergency treatments, post-operative recovery, and specialized care in a comfortable, well-equipped environment. Our experienced staff ensures the highest standards of care and attention for your furry friends, offering both short-term and extended stays as needed.",
  },
  {
    id: 2,
    title: "Surgery & Operations",
    image: "/Surgery.webp",
    description:
      "We provide advanced surgical procedures performed by skilled veterinarians. From routine spays and neuters to complex surgeries, we ensure the highest level of expertise and care. Our state-of-the-art surgical suite is equipped with the latest technology, and we prioritize safety with thorough pre-surgical evaluations and post-operative care to ensure a smooth recovery for your pet.",
  },
  {
    id: 3,
    title: "Vaccinations",
    image: "/images.jpeg",
    description:
      "Our vaccination services protect your pets from a variety of preventable diseases. We offer a wide range of vaccinations based on age, breed, and health status, including core vaccines for dogs and cats, as well as vaccines for exotic pets. Vaccinations help boost your pet’s immunity and prevent serious illnesses, ensuring they stay healthy and safe.",
  },
  {
    id: 4,
    title: "Dental Care",
    image: "/Dental-Scaling.webp",
    description:
      "Dental health is just as important for your pet as it is for you. Our dental care services include routine cleanings, teeth extractions, and comprehensive oral health exams to detect issues like gum disease, cavities, or infections. We use specialized equipment and techniques to keep your pet's teeth and gums healthy, preventing long-term oral health problems and maintaining their overall well-being.",
  },
  {
    id: 5,
    title: "Veterinary Laboratory",
    image: "/Veterinarian-Laboratory.webp",
    description:
      "Our in-house veterinary laboratory provides accurate and fast diagnostic testing. From blood work to urine analysis, our lab allows us to quickly identify health conditions such as infections, organ dysfunction, or nutritional deficiencies. This allows us to create effective treatment plans and monitor your pet's health over time, ensuring they receive the best possible care.",
  },
  {
    id: 6,
    title: "Equines Services",
    image: "/Equines-Care-and-Services.jpeg",
    description:
      "Our equine services provide specialized care for horses, including preventive care, diagnostics, and treatments for a variety of conditions. We offer routine exams, vaccinations, hoof care, and dental work, along with more specialized services like lameness evaluations, surgeries, and reproductive health management. Our team is equipped with the knowledge and tools to keep your horses healthy and performing at their best.",
  },
];

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((service) => service.id === parseInt(id));

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="bg-[#f07167] min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-80 object-center object-cover rounded-t-lg"
        />
        <div className="p-8">
          <h2 className="text-4xl font-semibold text-[#333] mb-6">
            {service.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {service.description}
          </p>
          <div className="border-t border-gray-300 pt-6 mt-6">
            <p className="text-sm text-gray-500 font-bold tracking-wide">
              For more information, feel free to contact us or book an
              appointment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
