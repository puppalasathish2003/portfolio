function Button({ children, href, primary = false }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold transition duration-300 ${
        primary
          ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/30"
          : "border border-cyan-500 hover:bg-cyan-500 hover:text-black"
      }`}
    >
      {children}
    </a>
  );
}

export default Button;