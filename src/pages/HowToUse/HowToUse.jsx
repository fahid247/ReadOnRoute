// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BookOpen, Search, UserCheck } from "lucide-react";

const HowToUse = () => {
  const steps = [
    {
      icon: <UserCheck size={28} />,
      title: "Create an Account",
      description:
        "Sign up as a reader or librarian to access all features and personalize your experience.",
    },
    {
      icon: <Search size={28} />,
      title: "Browse & Search Books",
      description:
        "Use the search bar and categories to find books that interest you, filter by price, pages, or category.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Read Details & order or wish",
      description:
        "Add books to your library, track reading progress, or order books from trusted librarians.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" },
  };

  return (
    <section className="py-20 bg-base-100 min-h-screen inter">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 playfair">
            How to <span className="text-primary">Use</span>
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Getting started with Read On Route is simple. Follow these steps to explore, borrow, and enjoy books seamlessly.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-base-200 rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="bg-primary/10 text-primary rounded-full p-5 mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-base-content/70">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;
