import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useAuth from '../../Hooks/UseAuth';

const Payment = () => {
  const { orderId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: order, isLoading } = useQuery({
    queryKey: ['order', orderId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders/${orderId}`);
      return res.data;
    },
    enabled: !!orderId,
  });

  if (isLoading) {
    return <Skeleton count={6} />;
  }

  const handlePayment = async () => {
    const paymentInfo = {
      name: order.bookName,
      price: order.price,
      email: user.email,
      orderId: order._id,
    };

    const res = await axiosSecure.post(
      '/create-checkout-session',
      paymentInfo
    );

    // Redirect to Stripe
    window.location.replace(res.data.url);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Book:</span> {order.bookName}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ৳{order.price}
        </p>
        <p>
          <span className="font-semibold">Order ID:</span> {order._id}
        </p>
      </div>

      <button
        onClick={handlePayment}
        className="btn btn-primary w-full mt-6"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
