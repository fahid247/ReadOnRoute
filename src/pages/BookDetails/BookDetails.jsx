import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa";
import { BookImage } from "lucide-react";

const BookDetails = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: book = {}, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/AllBooks/${id}`);
      return res.data;
    },
  });

  const handleOrder = async (e) => {
    e.preventDefault();
    const form = e.target;

    const orderInfo = {
      bookId: book._id,
      bookName: book.name,
      price: book.price,
      name: user.displayName,
      email: user.email,
      phone: form.phone.value,
      address: form.address.value,
      orderStatus: "pending",
      paymentStatus: "unpaid",
      orderedAt: new Date(),
      librarianEmail: book.librarianEmail,
    };

    Swal.fire({
  title: "order successful!",
  icon: "success",
  draggable: true
});

    await axiosSecure.post("/orders", orderInfo);

    document.getElementById("order_modal").close();

    navigate('/dashboard/my-orders')

  };
  const handleWishList = async (e) => {
    e.preventDefault();
    const wishInfo = {
      bookId: book._id,
      BookImage:book.image,
      bookName: book.name,
      price: book.price,
      name: user.displayName,
      email: user.email,
      wishedAt: new Date(),
      librarianEmail: book.librarianEmail,
    };

    Swal.fire({
  title: "Added to wishlist",
  icon: "success",
  draggable: true
});

    await axiosSecure.post("/wishList", wishInfo);

    document.getElementById("wish_modal").close();

    navigate('/dashboard/my-orders')

  };

  if (isLoading) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="py-16 bg-base-300 min-h-screen">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        <img
          src={book.image}
          alt={book.name}
          className="w-full  rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-2">{book.name}</h2>
          <p className="text-lg text-gray-600 mb-4">by {book.author}</p>

          <p className="mb-4">{book.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Category:</strong> {book.category}</p>
            <p><strong>Language:</strong> {book.language}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <p><strong>Status:</strong> {book.status}</p>
          </div>

          <p className="text-xl font-semibold mt-6">Price: ৳{book.price}</p>

          <div className="flex gap-2">
            <button
            className="btn btn-primary mt-6"
            onClick={() => document.getElementById("order_modal").showModal()}
          >
            Order Now
          </button>

          <button
            className="btn btn-primary border-none bg-pink-500 mt-6"
            onClick={() => document.getElementById("wish_modal").showModal()}
          >
            Add to Wish List <FaHeart />
          </button>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <dialog id="order_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Place Your Order</h3>

          <form onSubmit={handleOrder} className="space-y-3">
            <input
              type="text"
              readOnly
              value={user?.displayName || ""}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              readOnly
              value={user?.email || ""}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="input input-bordered w-full"
            />
            <textarea
              name="address"
              placeholder="Delivery Address"
              required
              className="textarea textarea-bordered w-full"
            ></textarea>

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Place Order
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("order_modal").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
      {/* Wish Modal */}
      <dialog id="wish_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Make your wish list</h3>

          <form onSubmit={handleWishList} className="space-y-3">
            <input
              type="text"
              readOnly
              value={user?.displayName || ""}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              readOnly
              value={user?.email || ""}
              className="input input-bordered w-full"
            />
            <div className="modal-action">
              <button type="submit" className="btn btn-primary bg-pink-500">
                Add to Wish List
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("wish_modal").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default BookDetails;
