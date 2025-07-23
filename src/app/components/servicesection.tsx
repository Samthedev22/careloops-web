'use client'
import { FaLightbulb, FaMusic, FaHeart } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';


const servicesection = () => {
  const features = [
    {
      title: "Active Learning",
      description: "We promote creativity and curiosity through hands-on activities, music and discovery-based play.",
      icon: <FaLightbulb className="text-4xl text-white" />,
      bg: "from-green-400 to-green-500",
      border: "border-green-400"
    },
  
  {
    title: "Music & Rhythm",
    description: "Children enjoy music sessions that enhance their listening, coordination, and creative expression.",
    icon: <FaMusic className="text-white text-3xl" />,
    bg: "from-pink-400 to-fuchsia-500",
  },
  {
    title: "Outdoor Play",
    description: "Physical activities in safe outdoor settings promote health, teamwork, and imagination.",
    icon: <FaTree className="text-white text-3xl" />,
    bg: "from-cyan-400 to-blue-500",
  },
  {
    title: "Inclusion And Diversity",
    description: "We accomodate children according their developmental stage & ability. We promote a culture that ensures that every child is respected and their differences are celebrated.",
    icon: <FaHeart className="text-white text-3xl" />,
    bg: "from-red-400 to-red-500",
  }
    
  ];

  return (
    <section className="bg-white py-16 px-10 text-center">
      
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Welcome to Careloop Services!</h2>
      <p className="text-slate-600 max-w-xl mx-auto mb-10">
      We set children up for success to be future leaders.     </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center lg:grid-cols-2 md:px-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-xl  transition-all duration-300">
            <div className={`mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.bg} shadow-md`}>
              {feature.icon}
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">{feature.title}</h3>
            <div className={`h-1 w-10 mx-auto mb-4 bg-gradient-to-r ${feature.bg} rounded`}></div>
            <p className="text-slate-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default servicesection;
