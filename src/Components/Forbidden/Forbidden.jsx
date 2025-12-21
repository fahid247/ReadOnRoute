import React from "react";
import { Link } from "react-router";
import image1 from '../../assets/Screenshot 2025-12-21 165357.png'

const Forbidden = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradint-to-r from-red-50 to-orange-100 px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        
        {/* Image */}
        <img
          src={image1}
          alt="Forbidden Access"
          className="w-64 mx-auto mb-6"
        />

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-red-600 mb-3">
          403 - Forbidden
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Sorry, you don't have permission to access this page.
          <br />
          Please make sure you're logged in with the correct role.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Go Home
          </Link>

          <Link
            to="/login"
            className="px-6 py-2 rounded-lg border border-orange-500 text-orange-500 font-medium hover:bg-orange-50 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
