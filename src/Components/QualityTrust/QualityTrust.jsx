import React from "react";
import { ShieldCheck, Truck, MapPin, Star } from "lucide-react";

const promises = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: "Verified Books & Sellers",
    description:
      "We ensure that every book and librarian on our platform is verified for authenticity and quality.",
  },
  {
    icon: <Truck className="w-12 h-12 text-primary" />,
    title: "Fast & Secure Delivery",
    description:
      "Your books are delivered quickly and safely with real-time tracking at every step.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-primary" />,
    title: "Nationwide Coverage",
    description:
      "We serve all 64 districts, connecting readers and librarians across Bangladesh.",
  },
  {
    icon: <Star className="w-12 h-12 text-primary" />,
    title: "Customer Satisfaction",
    description:
      "Our dedicated support team ensures that every reader and librarian has a hassle-free experience.",
  },
];

const QualityTrust = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our <span className="text-primary">Quality & Trust</span> Promise
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            At ReadOnRoute, we are committed to providing reliable service, verified books, and complete satisfaction for both readers and librarians.
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-5">{promise.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{promise.title}</h3>
              <p className="text-gray-600 text-sm">{promise.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-4 text-lg">
            Join thousands of readers and librarians who trust ReadOnRoute.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition">
            Explore Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualityTrust;
