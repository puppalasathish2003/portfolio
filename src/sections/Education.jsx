import education from "../data/education";

function Education() {
  return (
    <section
    id="education"
    className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {education.map((item) => (
            <div
              key={item.institute}
              className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition duration-300"
            >
              <p className="text-cyan-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-3">
                {item.institute}
              </h3>

              <p className="text-gray-300 mt-3">
                {item.degree}
              </p>

              <p className="text-gray-500 mt-3">
                {item.cgpa || item.percentage}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;