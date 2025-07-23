'use client'
import {FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import Gallery from '../components/Gallery';
import AgeGroup from '../components/agegroup';
import { FaUserCheck } from 'react-icons/fa6';
const services = [
 
  {
    title: "After-hours Care",
    description: "We are committed to offering the best possible care for children whose parents and caregivers need to be away on planned holidays or attent short-notice appointments. Care Loop creates a safe environment where children of all ages can feel at home when they are away from their own homes.",
    icon: <FaUserCheck className="text-white text-3xl" />,
    bg: "from-pink-400 to-fuchsia-500",
  },
  {
    title: "Daycare",
    description: "Our Daycare Center offers personalized care for children within the growing community of west Brant. We are conveniently situated away from busy traffic, making drop-offs and pick-ups easy. We look forward to engaging your child in fun, problem-solving, and hands-on activities.",
    icon: <FaChalkboardTeacher className="text-white text-3xl" />,
    bg: "from-green-400 to-green-500",
  },
 
  {
    title: "Supportive engagement",
    description: "With positive interaction, we allow our parents to take the lead and be fully involved in their little ones' caregiving routines at Care Loop. We consider cultural and religious beliefs and encourage parents engagement to ensure care that perfectly meet each child's development needs.",
    icon: <FaUsers className="text-white text-3xl" />,
    bg: "from-yellow-400 to-orange-500",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-16 px-6 bg-white" id="services">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-800 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg">
          Designed to support your child’s development in a nurturing and stimulating environment.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${service.bg}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
      <AgeGroup/>

      <Gallery />
    </section>
  );
};

export default ServiceSection;
