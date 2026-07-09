import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

import Button from "../components/Button";
import SocialIcons from "../components/SocialIcons";
import personal from "../data/personal";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center ..."
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10 max-w-[1350px] mx-auto w-full px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div className="max-w-xl lg:max-w-2xl"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

          <div className="flex flex-wrap gap-3 mb-6">

  <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium">
    👋 Welcome to my Portfolio
  </span>

  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400 text-green-300 text-sm font-medium">
    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
    Open to Data Analyst Opportunities
  </div>

</div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
  Hi, I'm
  <span className="block mt-2 text-cyan-400">
    {personal.name}
  </span>
</h1>

            <div className="mt-5 text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-300 h-14">

              <TypeAnimation
                sequence={[
  "Aspiring Data Analyst",
  1800,
  "Power BI Developer",
  1800,
  "SQL & Python Enthusiast",
  1800,
]}
                repeat={Infinity}
              />

            </div>

            <p className="mt-6 text-gray-400 leading-8 max-w-2xl text-base md:text-lg">
              Passionate about transforming raw data into meaningful
              business insights using Python, SQL, Power BI,
              Machine Learning and Artificial Intelligence.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Button href="/resume.pdf">
                Download Resume
              </Button>

              <Button
                href="#projects"
                primary={false}
              >
                View Projects
              </Button>

            </div>

            <SocialIcons />

            <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">

              <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-700 text-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">

                <h2 className="text-3xl md:text-4xl font-black text-cyan-400">
                  10+
                </h2>

                <p className="text-gray-400 mt-3 text-sm">
                  Certifications
                </p>

              </div>

              <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-700 text-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">

                <h2 className="text-3xl md:text-4xl font-black text-cyan-400">
                  3+
                </h2>

                <p className="text-gray-400 mt-3 text-sm">
                  Projects
                </p>

              </div>

              <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-700 text-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">

                <h2 className="text-3xl md:text-4xl font-black text-cyan-400">
                  2+
                </h2>

                <p className="text-gray-400 mt-3 text-sm">
                  Internships
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

<motion.div className="max-w-xl lg:max-w-2xl"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.25}
    scale={1.05}
    transitionSpeed={2500}
    tiltMaxAngleX={12}
    tiltMaxAngleY={12}
    className="rounded-full"
  >
    <motion.div className="max-w-xl lg:max-w-2xl"
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

      <img
        src="/profile.png"
        alt="Profile"
        className="relative w-[280px] md:w-[350px] lg:w-[390px] rounded-full border-[5px] border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.35)]"
      />
    </motion.div>
  </Tilt>
</motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;