import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10 py-5">

        <h1 className="text-2xl font-black text-cyan-400 cursor-pointer">
          P. Sathish
        </h1>

        <ul className="hidden md:flex gap-8">

          {navLinks.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="capitalize cursor-pointer hover:text-cyan-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900">

          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-4 capitalize border-b border-slate-800 hover:bg-slate-800"
            >
              {item}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;