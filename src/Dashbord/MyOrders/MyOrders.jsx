import React from "react";
import useAuth from "../../Hooks/UseAuth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { Link } from "react-router";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["my-orders", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user.email}`);
      return res.data;
    },
  });

  const cancelMutation = useMutation({
    mutationFn: async (id) => {
      return axiosSecure.patch(`/orders/${id}`, { orderStatus: "cancelled" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["my-orders"]);
    },
  });

  if (isLoading) {
    return <p className="text-center py-20">Loading...</p>;
  }
  return (
    <section className="py-16 bg-base-200 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-10">My Orders</h2>

        {orders.length === 0 ? (
          <p className="text-center">You have no orders yet.</p>
        ) : (
          <>
            {/* ===== Mobile View (Clear Cards) ===== */}
            <div className="space-y-4 md:hidden">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="bg-base-100 rounded-xl shadow p-4"
                >
                  {/* Book */}
                  <h3 className="font-semibold text-lg mb-3">
                    {order.bookName}
                  </h3>

                  <div className="space-y-2 text-sm">
                    {/* Order Date */}
                    <div className="flex justify-between">
                      <span className="text-gray-500">Order Date</span>
                      <span className="font-medium">
                        {new Date(order.orderedAt).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Order Status */}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Order Status</span>
                      <span
                        className={`badge ${
                          order.orderStatus === "pending"
                            ? "badge-warning"
                            : order.orderStatus === "cancelled"
                            ? "badge-error"
                            : "badge-success"
                        }`}
                      >
                        {order.orderStatus}
                      </span>
                    </div>

                    {/* Payment Status */}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Payment</span>
                      <span
                        className={`badge ${
                          order.paymentStatus === "paid"
                            ? "badge-success"
                            : "badge-outline"
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  {order.orderStatus === "pending" && (
                    <>
                      <div className="divider my-3"></div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => cancelMutation.mutate(order._id)}
                          className="btn btn-sm btn-error text-white flex-1"
                        >
                          Cancel Order
                        </button>

                        {order.paymentStatus === "unpaid" && (
                          <Link
                            to={`/dashboard/payment/${order._id}`}
                            className="btn btn-sm btn-primary flex-1"
                          >
                            Pay Now
                          </Link>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* ===== Desktop / Tablet View (Table) ===== */}
            <div className="hidden md:block overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Book Title</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Payment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order._id}>
                      <td>{index + 1}</td>
                      <td className="font-medium">{order.bookName}</td>
                      <td>{new Date(order.orderedAt).toLocaleDateString()}</td>
                      <td>
                        <span
                          className={`badge ${
                            order.orderStatus === "pending"
                              ? "badge-warning"
                              : order.orderStatus === "cancelled"
                              ? "badge-error"
                              : "badge-success"
                          }`}
                        >
                          {order.orderStatus}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            order.paymentStatus === "paid"
                              ? "badge-success"
                              : "badge-outline"
                          }`}
                        >
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="space-x-2">
                        {order.orderStatus === "pending" && (
                          <>
                            <button
                              onClick={() => cancelMutation.mutate(order._id)}
                              className="btn btn-sm btn-error text-white"
                            >
                              Cancel
                            </button>

                            {order.paymentStatus === "unpaid" && (
                              <Link
                                to={`/dashboard/payment/${order._id}`}
                                className="btn btn-sm btn-primary"
                              >
                                Pay Now
                              </Link>
                            )}
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MyOrders;
