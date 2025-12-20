import React from "react";
import { Link } from "react-router";
import { FaTimesCircle } from "react-icons/fa";

const PaymentCancelled = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl text-center p-6">
        <FaTimesCircle className="text-error text-6xl mx-auto mb-4" />

        <h2 className="text-2xl font-bold mb-2">
          Payment Cancelled
        </h2>

        <p className="text-gray-500 mb-6">
          Your payment was cancelled. You can try again anytime.
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/dashboard/my-orders" className="btn btn-primary">
            Try Again
          </Link>

          <Link to="/" className="btn btn-outline">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
