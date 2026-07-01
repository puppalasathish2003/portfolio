function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          P. Sathish
        </h1>

        <ul className="flex gap-8 text-lg font-medium">
          <li className="cursor-pointer hover:text-cyan-400 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            Skills
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            Projects
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;