import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import personal from "../data/personal";

function SocialIcons() {
  return (
    <div className="flex gap-5 mt-8">

      <a
        href={personal.github}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition duration-300"
      >
        <FaGithub size={22} />
      </a>

      <a
        href={personal.linkedin}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition duration-300"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href={`mailto:${personal.email}`}
        className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition duration-300"
      >
        <FaEnvelope size={22} />
      </a>

    </div>
  );
}

export default SocialIcons;