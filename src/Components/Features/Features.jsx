// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Book, Star, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Book size={28} />,
      title: "Extensive Library",
      description: "Access thousands of books from trusted librarians across Bangladesh.",
    },
    {
      icon: <Star size={28} />,
      title: "Top Ratings",
      description: "Curated collections and recommendations based on real user reviews.",
    },
    {
      icon: <Clock size={28} />,
      title: "Anytime Access",
      description: "Read online or offline at your convenience, anytime, anywhere.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, boxShadow: "0px 12px 30px rgba(0,0,0,0.15)" },
  };

  return (
    <section className="py-20 bg-base-200 inter">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl playfair md:text-5xl font-extrabold text-primary"
        >
          Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-base-100 p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="bg-primary/10 text-primary rounded-full p-5 mb-5">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-base-content/70">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
