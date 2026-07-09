import { FaArrowRight } from "react-icons/fa";

function Button({ children, href, primary = true }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
  primary
    ? "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
    : "border border-cyan-400 text-white hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
}`}
    >
      {children}
      <FaArrowRight className="text-sm" />
    </a>
  );
}

export default Button;