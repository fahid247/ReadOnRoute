// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Highlights = () => {
  const highlights = [
    "Over 5000+ books from verified librarians",
    "Personalized recommendations for readers",
    "Easy-to-use platform for borrowing and reading",
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl playfair md:text-5xl font-extrabold text-primary mb-8"
        >
          Highlights
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-base-100 p-6 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              <FaStar size={24} className="text-yellow-300 mt-1" />
              <p className="text-base-content/80">{h}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Highlights;
