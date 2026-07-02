import experience from "../data/experience";

function Experience() {
  return (
    <section 
    id="experience"
    className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.company + item.role}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
            >
              <p className="text-cyan-400 font-bold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.company}
              </h3>

              <p className="text-gray-300 mt-2">
                {item.role}
              </p>

              <p className="text-gray-500 mt-2">
                {item.duration}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;