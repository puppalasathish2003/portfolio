import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-cyan-400">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 max-w-2xl mx-auto text-center text-lg leading-8 text-gray-400 px-4">
  {subtitle}
</p>
      )}
    </motion.div>
  );
}

export default SectionTitle;