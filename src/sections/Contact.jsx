import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import personal from "../data/personal";

function Contact() {
  return (
    <section
  id="contact"
  className="py-20 max-w-7xl mx-auto px-6 flex flex-col items-center"
>
      <div className="w-full max-w-5xl mx-auto">

        <SectionTitle
  title="Contact Me"
/>

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="w-full flex flex-col items-center text-center mb-10"
>
  <p className="text-lg text-gray-300 leading-8 text-center">
    Let's connect and build something amazing together.
  </p>

  <p className="max-w-2xl mx-auto text-gray-300 leading-8 text-center">
    I'm actively seeking opportunities in Data Analytics, Business Intelligence,
    and AI/ML. Feel free to connect with me!
  </p>
</motion.div>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8"
        >

          {/* Left Card */}

          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700 p-8 hover:border-cyan-400 transition">

            <div className="space-y-6">

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-400">
                    {personal.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-400">
                    Mahabubnagar, Telangana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhone className="text-cyan-400 text-2xl" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-400">
                    {personal.phone}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Card */}

<div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700 p-8 hover:border-cyan-400 transition">

  <div className="space-y-6">

    <a
      href={personal.github}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-5 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
    >
      <FaGithub className="text-cyan-400 text-3xl" />

      <div>
        <h3 className="font-bold text-lg">
          GitHub
        </h3>

        <p className="text-cyan-400 text-sm">
          github.com/puppalasathish2003
        </p>
      </div>
    </a>

    <a
      href={personal.linkedin}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-5 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
    >
      <FaLinkedin className="text-cyan-400 text-3xl" />

      <div>
        <h3 className="font-bold text-lg">
          LinkedIn
        </h3>

        <p className="text-cyan-400 text-sm">
          linkedin.com/in/sathishpuppala
        </p>
      </div>
    </a>

  </div>

</div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;