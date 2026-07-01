import personal from "../data/personal";
function Hero() {
  return (
    <section className="bg-slate-900 text-white min-h-screen pt-24">

      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between min-h-[90vh]">

        {/* Left Side */}

        <div className="w-1/2">

          <p className="text-cyan-400 text-xl mb-4">
            Hello 👋
          </p>

          <h1 className="text-7xl font-extrabold leading-tight">

            I'm

            <br />

            <span className="text-cyan-400 drop-shadow-lg">
              {personal.name}
            </span>

          </h1>

          <h2 className="text-4xl mt-6 font-bold text-gray-200">

            {personal.role}

          </h2>

          <p className="text-gray-400 mt-8 text-xl leading-9 max-w-xl">

            Transforming data into meaningful business insights using
            Python, SQL, Power BI and Machine Learning.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-cyan-500 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:scale-105 transition duration-300">

              {personal.buttons.resume}

            </button>

             <button className="border-2 border-cyan-500 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500 hover:scale-105 transition duration-300">

              {personal.buttons.projects}

            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="w-1/2 flex justify-center">

          <img

            src="/profile.png"

            alt="Profile"

            className="w-[450px] rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(6,182,212,0.45)] hover:scale-105 transition duration-500"

          />

        </div>

      </div>

    </section>
  );
}

export default Hero;