import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBriefcase,
  FaCertificate,
  FaMapMarkerAlt,
} from "react-icons/fa";
import personal from "../data/personal";

function About() {
  const cards = [
    {
      icon: <FaUserGraduate size={28} />,
      title: "Education",
      value: "B.Tech CSE (AI & ML)\nJNTUH University College of Engineering Wanaparthy\nCGPA: 7.30",
    },
    {
      icon: <FaBriefcase size={28} />,
      title: "Internships",
      value: "CodeAlpha\nData Analytics Intern\nAI Intern",
    },
    {
      icon: <FaCertificate size={28} />,
      title: "Certifications",
      value: "Cisco • Tata • Deloitte • Pixel Quest",
    },
    {
      icon: <FaMapMarkerAlt size={28} />,
      title: "Location",
      value: "Mahabubnagar\nTelangana\nIndia",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-[1350px] mx-auto px-12 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-6xl font-bold text-center text-cyan-400 mb-4">
  About Me
</h2>

<div className="flex justify-center mt-4 mb-10">
  <p className="max-w-2xl mx-auto text-center text-gray-400 text-lg leading-8 mb-10">
    Aspiring Data Analyst passionate about transforming
    data into actionable insights using Python, SQL,
    Power BI and Machine Learning.
  </p>
</div>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900 rounded-3xl p-8 min-h-[210px] border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] transition-all duration-300 ease-in-out
hover:-translate-y-2"
            >

              <div className="flex flex-col items-center mb-6">

    <div className="text-cyan-400">
        {card.icon}
    </div>

    <h3 className="text-2xl font-bold mt-3">
        {card.title}
    </h3>

</div>

              <p className="mt-4 whitespace-pre-line text-gray-300 leading-8 text-lg text-center">

                {card.value}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default About;