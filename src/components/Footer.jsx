import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 text-center">

        <h2 className="text-2xl font-bold text-cyan-400">
          P. Sathish
        </h2>

        <p className="mt-3">
          Data Analyst | AI/ML Engineer
        </p>

        <div className="flex justify-center gap-8 text-2xl mt-6">

          <a
            href="https://github.com/puppalasathish2003"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sathishpuppala"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:puppalasathish2003@gmail.com"
            className="hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="mt-8 text-sm">
          © 2026 P. Sathish. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;