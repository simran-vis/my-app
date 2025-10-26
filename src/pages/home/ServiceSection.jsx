import { FaTruck, FaShieldAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, link }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64 h-45">
    <div className="text-blue-500 text-4xl mb-2">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm mt-1">{description}</p>
    <a href={link} className="mt-2 text-blue-500 hover:underline text-sm">Learn More</a>
  </div>
);

const ServiceSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mx-auto py-8 px-4">
      <ServiceCard
        icon={<FaTruck />}
        title="Free Delivery"
        description="Free shipping on orders over $50"
        link="#"
      />
      <ServiceCard
        icon={<FaShieldAlt />}
        title="Secure Payment"
        description="100% secure payment processing"
        link="#"
      />
      <ServiceCard
        icon={<FaClock />}
        title="24/7 Support"
        description="Round-the-clock customer service"
        link="#"
      />
      <ServiceCard
        icon={<FaPhoneAlt />}
        title="Expert Consultation"
        description="Professional medical advice"
        link="#"
      />
    </div>
  );
};

export default ServiceSection;
