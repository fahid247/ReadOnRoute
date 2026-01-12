import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show SweetAlert
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us. We'll get back to you soon.",
      confirmButtonColor: "#4f46e5", // Tailwind primary
    });

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="min-h-screen bg-base-100 py-20 px-6 inter">
      <div className="mx-auto max-w-6xl">
        {/* ================= Header ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl playfair">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base-content/70">
            Have questions, feedback, or collaboration ideas? The Read On Route
            team is always happy to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-14 md:grid-cols-2">
          {/* ================= Contact Info ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="group flex items-start gap-4 rounded-2xl bg-base-200 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-content">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-base-content/70">fahid32446@gmail.com</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-2xl bg-base-200 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-content">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-base-content/70">+880 1644-887100</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-2xl bg-base-200 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-content">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-base-content/70">Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          {/* ================= Contact Form ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-base-200 p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-semibold">Send us a message</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-full border border-base-300 bg-base-100 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-base-300 bg-base-100 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-2xl border border-base-300 bg-base-100 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 playfair"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
