function About() {
  return (
    <section 
    id="about" 
    className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          About Me
        </h2>

        <p className="mt-8 text-center text-xl text-gray-400 max-w-4xl mx-auto leading-9">
          I am an aspiring Data Analyst and AI/ML Engineer pursuing
          B.Tech in Computer Science (AI & ML). I enjoy transforming
          raw data into meaningful insights using Python, SQL,
          Power BI and Machine Learning while building real-world
          analytics and AI solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
            <p className="mt-3 text-gray-300">Projects</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">9+</h3>
            <p className="mt-3 text-gray-300">Certifications</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">2</h3>
            <p className="mt-3 text-gray-300">Internships</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">B.Tech</h3>
            <p className="mt-3 text-gray-300">AI & ML</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;