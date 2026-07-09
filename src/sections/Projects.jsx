import projects from "../data/projects";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaCode } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

function Projects() {
  return (
    <section
  id="projects"
  className="py-20 max-w-7xl mx-auto px-6 flex flex-col items-center"
>
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full flex flex-col items-center mb-16">
  <h2 className="text-6xl font-bold text-cyan-400 text-center">
    Projects
  </h2>

  <p className="mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
    Some of my featured projects in Data Analytics, AI and Machine Learning.
  </p>
</div>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <Tilt
                glareEnable
                glareMaxOpacity={0.15}
                scale={1.03}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
              >

                <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700 hover:border-cyan-400 p-6 flex flex-col h-full hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">

                  <div className="h-44 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-blue-500/20 flex items-center justify-center">

                    <FaCode
    size={64}
    className="text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]"
 />

                  </div>

                  <div className="p-6 flex flex-col flex-1">

                    <div className="flex items-center justify-between">

  <h3 className="text-2xl font-bold text-cyan-400">
    {project.title}
  </h3>

  {index === 2 && (
    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-400 text-green-300 text-xs font-semibold">
      Featured
    </span>
  )}

</div>

                    <p className="text-gray-400 mt-4 leading-7 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">

                      {project.tech.split("•").map((tech) => (

                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm border border-cyan-500/30"
                        >
                          {tech.trim()}
                        </span>

                      ))}

                    </div>
                    <div className="mt-auto pt-6">
                    {project.github ? (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
  >
    <FaGithub />
    View on GitHub
  </a>
) : (
  <span className="inline-block mt-5 px-4 py-2 rounded-xl bg-green-500/10 border border-green-400 text-green-300 text-sm font-medium">
    Forage Virtual Job Simulation
  </span>
)}
</div>

                  </div>

                </div>

              </Tilt>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;