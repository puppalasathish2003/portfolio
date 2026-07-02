import skills from "../data/skills";

function Skills() {
  return (
    <section 
    id="skills"
    className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold">
                {skill.name}
              </h3>

              <p className="mt-2 text-sm opacity-80">
                {skill.category}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;