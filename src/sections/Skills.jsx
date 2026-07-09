import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBrain,
} from "react-icons/fa";
import skills from "../data/skills";

function getIcon(name) {
  switch (name) {
    case "Python":
      return <FaPython size={40} />;
    case "SQL":
      return <FaDatabase size={40} />;
    case "Power BI":
      return <FaChartBar size={40} />;
    case "Excel":
      return <FaChartBar size={40} />;
    case "Machine Learning":
      return <FaBrain size={40} />;
    case "HTML":
      return <FaHtml5 size={40} />;
    case "CSS":
      return <FaCss3Alt size={40} />;
    case "JavaScript":
      return <FaJsSquare size={40} />;
    case "React":
      return <FaReact size={40} />;
    case "Git":
      return <FaGitAlt size={40} />;
    default:
      return <FaChartBar size={40} />;
  }
}

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-black text-center text-cyan-400">
            Technical Skills
          </h2>

          <div className="flex justify-center mt-6">
  <p className="max-w-2xl text-center text-gray-400 text-lg leading-8">
    Technologies and tools I use to build data-driven solutions,
    interactive dashboards and AI-powered applications.
  </p>
</div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-14">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
    y: -10,
    scale: 1.05,
}}
              className="bg-slate-950 rounded-3xl border border-slate-800 p-8 min-h-[180px] text-center hover:border-cyan-400
hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >

              <div className="text-cyan-400 flex justify-center mb-6 drop-shadow-[0_0_12px_#22d3ee]">
                {getIcon(skill.name)}
              </div>

              <h3 className="text-xl font-bold">
                {skill.name}
              </h3>

              <p className="text-gray-400 mt-3 text-sm">
                {skill.category}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;