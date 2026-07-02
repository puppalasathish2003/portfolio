import contact from "../data/contact";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Contact Me
        </h2>

        <div className="bg-slate-800 rounded-2xl p-10 shadow-lg space-y-6">

          <p>
            <span className="font-bold text-cyan-400">📧 Email:</span>{" "}
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-cyan-400"
            >
              {contact.email}
            </a>
          </p>

          <p>
            <span className="font-bold text-cyan-400">📱 Phone:</span>{" "}
            <a
              href={`tel:${contact.phone}`}
              className="hover:text-cyan-400"
            >
              {contact.phone}
            </a>
          </p>

          <p>
            <span className="font-bold text-cyan-400">📍 Location:</span>{" "}
            {contact.location}
          </p>

          <p>
            <span className="font-bold text-cyan-400">💻 GitHub:</span>{" "}
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              GitHub Profile
            </a>
          </p>

          <p>
            <span className="font-bold text-cyan-400">💼 LinkedIn:</span>{" "}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              LinkedIn Profile
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;