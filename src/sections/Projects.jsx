import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              <div className="mt-6">
                <span className="text-sm font-semibold text-cyan-300">
                  Tech Stack
                </span>

                <p className="text-gray-300 mt-2">
                  {project.tech}
                </p>
              </div>

<a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  className="mt-8 flex items-center justify-center gap-3 bg-cyan-500 text-black py-3 rounded-xl font-semibold hover:bg-cyan-400 transition duration-300"
>
  <FaGithub />
  View on GitHub
</a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;