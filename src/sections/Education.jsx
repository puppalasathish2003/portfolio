import education from "../data/education";

function Education() {
  return (
    <section
  id="education"
  className="py-20 max-w-7xl mx-auto px-6 flex flex-col items-center"
>
      <div className="w-full max-w-7xl mx-auto">

        <div className="w-full flex flex-col items-center mb-16">
  <h2 className="text-6xl font-bold text-cyan-400 text-center">
    Education
  </h2>

  <p className="mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
    My academic journey that built a strong foundation in Computer Science, Artificial Intelligence and Data Analytics.
  </p>
</div>

        <div className="grid md:grid-cols-2 gap-8">

          {education.map((item) => (
            <div
  key={item.institute}
  style={{ padding: "24px 30px" }}
  className="bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
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