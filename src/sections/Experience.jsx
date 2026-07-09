import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col items-center justify-center mb-14">
  <h2 className="text-6xl font-bold text-cyan-400 text-center">
    Experience
  </h2>

  <p className="mt-6 max-w-3xl text-center text-lg leading-8 text-gray-400">
    My internships and professional training strengthened my skills in
    Data Analytics, Business Intelligence and Artificial Intelligence.
  </p>
</div>

        <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-in-out shadow-lg hover:shadow-cyan-500/20"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

                <div className="flex flex-col md:flex-row items-center md:items-center gap-5 text-center md:text-left">

                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400 group-hover:rotate-6 transition-transform duration-300">
                    <FaBriefcase className="text-cyan-400 text-xl" />
                  </div>

                  <div className="text-center md:text-left">

                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-xs font-semibold">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold mt-1">
                      {item.role}
                    </h3>

                    <p className="text-gray-300 mt-2">
                      {item.company}
                    </p>
                    <p className="text-gray-400 mt-3 text-sm leading-7">
                       {item.description}
                    </p>
                  </div>

                </div>

                <div className="mt-5 md:mt-0">

                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-sm">
                    {item.duration}
                  </span>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;