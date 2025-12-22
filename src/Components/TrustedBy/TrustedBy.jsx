import React from "react";
import { Star, Users, MapPin, BookOpen, Truck } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    value: "15,000+",
    label: "Happy Readers",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    value: "4,000+",
    label: "Books Available",
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    value: "12,000+",
    label: "Orders Delivered",
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    value: "64",
    label: "Districts Covered",
  },
];

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Reader",
    location: "Dhaka",
    message:
      "ReadOnRoute has completely changed how I buy books. Fast delivery and excellent service!",
  },
  {
    name: "Mahmud Hasan",
    role: "Librarian",
    location: "Chattogram",
    message:
      "Managing orders is simple and efficient. ReadOnRoute helps me reach readers nationwide.",
  },
  {
    name: "Nusrat Jahan",
    role: "Reader",
    location: "Rajshahi",
    message:
      "I received my books within two days. The tracking system is very accurate!",
  },
];

const TrustedBy = () => {
  return (
    <section className="bg-base-200 rounded-sm py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Trusted by Readers & Librarians
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Thousands of readers and librarians across Bangladesh trust
            ReadOnRoute for reliable book delivery and seamless order management.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{review.message}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {review.role} • {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
