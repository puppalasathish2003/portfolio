import certificates from "../data/certificates";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaCertificate } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="w-full flex flex-col items-center mb-16">
  <h2 className="text-6xl font-bold text-cyan-400 text-center">
    Certifications
  </h2>

  <p className="mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
    Professional certifications that strengthened my Data Analytics, AI and Technology skills.
  </p>
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <Tilt
                glareEnable
                glareMaxOpacity={0.15}
                scale={1.03}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
              >

                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">

                  <div className="flex justify-center mb-6 text-cyan-400">
                    <FaCertificate size={45} />
                  </div>

                  <h3 className="text-2xl font-bold text-white min-h-[64px]">
                    {certificate.title}
                  </h3>

                  <p className="text-cyan-400 font-semibold mt-3">
                    {certificate.organization}
                  </p>

                  <span className="inline-block mt-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm">
                    {certificate.year}
                  </span>

                </div>

              </Tilt>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;