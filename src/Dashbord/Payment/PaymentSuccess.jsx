import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { FaCheckCircle } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data)
            })
        }
    },[sessionId,axiosSecure])

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl text-center p-6">
        <FaCheckCircle className="text-success text-6xl mx-auto mb-4" />

        <h2 className="text-2xl font-bold mb-2">
          Payment Successful!
        </h2>

        <p className="text-gray-500 mb-6">
          Thank you for your payment. Your order has been placed successfully.
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/dashboard/my-orders" className="btn btn-primary">
            View Orders
          </Link>

          <Link to="/" className="btn btn-outline">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
