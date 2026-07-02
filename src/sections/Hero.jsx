import personal from "../data/personal";
import Button from "../components/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
    id="home"
    className="bg-slate-900 text-white min-h-screen pt-24 flex items-center">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-xl font-semibold mb-5">
            Hello 👋
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            I'm
            <br />
            <span className="text-cyan-400">
              {personal.name}
            </span>
          </h1>

          <h2 className="text-3xl mt-7 font-bold">
            {personal.title}
          </h2>

          <h3 className="text-xl text-gray-400 mt-2">
            {personal.subtitle}
          </h3>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            {personal.description}
          </p>

          <div className="flex gap-5 mt-10">

            <Button primary href="/resume.pdf">
              Download Resume
            </Button>

            <Button href="#projects">
              Projects
            </Button>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-[420px] rounded-full border-4 border-cyan-400 shadow-[0_0_70px_rgba(6,182,212,0.5)]"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;