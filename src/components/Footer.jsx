import { FaGithub, FaLinkedin } from "react-icons/fa";
import personal from "../data/personal";

function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-5">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            P. Sathish
          </h2>

          <p className="text-gray-400 mt-1">
            Aspiring Data Analyst | AI & ML Enthusiast
          </p>

          <p className="text-gray-500 text-sm mt-4">
            Designed & Developed by P. Sathish
          </p>

          <p className="text-gray-600 text-sm mt-1">
            © 2026 All Rights Reserved.
          </p>
        </div>

        <div className="flex justify-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;