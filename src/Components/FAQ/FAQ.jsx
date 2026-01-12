// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How do I borrow books?",
    answer: "Sign up, browse the library, and click 'Borrow' on a book of your choice.",
  },
  {
    question: "Can I become a librarian?",
    answer: "Yes! Contact us to set up a librarian account to upload your books.",
  },
  {
    question: "Is there a subscription fee?",
    answer: "No, Read On Route is free to use for readers and librarians.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-base-200 inter">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl playfair md:text-5xl font-extrabold text-primary mb-8"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-base-100 rounded-xl p-5 cursor-pointer transition hover:shadow-lg"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h4 className="font-semibold">{faq.question}</h4>
              {openIndex === i && (
                <p className="mt-2 text-base-content/70">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
