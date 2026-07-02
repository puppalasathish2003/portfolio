import certificates from "../data/certificates";

function Certifications() {
  return (
    <section
     id="certifications"
     className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {certificate.title}
              </h3>

              <p className="mt-3 text-gray-300">
                {certificate.organization}
              </p>

              <p className="text-gray-500">
                {certificate.year}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;