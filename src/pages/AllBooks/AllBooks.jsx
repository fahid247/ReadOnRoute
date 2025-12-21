import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/UseAuth";
import Loading from "../../Components/Loading/Loading";
import { useState } from "react";

const AllBooks = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState(""); // price or pages

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["AllBooks"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosSecure.get("/AllBooks");
      return res.data;
    },
  });

  if (loading || isLoading) {
    return <Loading />;
  }

  // Filter
  let filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Sort
  if (sortOption === "price") {
    filteredBooks.sort((a, b) => a.price - b.price);
  } else if (sortOption === "pages") {
    filteredBooks.sort((a, b) => a.pages - b.pages);
  }

  return (
    <section className="py-16 bg-base-300 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {user.role === "librarian" ? "My Books" : "All Books"}
        </div>

        {/* Search + Sort */}
        <div className="flex justify-center mb-10 max-w-md mx-auto ">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by book name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <button
            type="button"
            onClick={() => {}}
            className="bg-primary hover:bg-secondary-content text-white px-5 rounded-r-md transition"
          >
            Search
          </button>

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 ml-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="pages">Pages</option>
          </select>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{book.name}</h3>
                <p className="text-gray-600 mb-1">{book.author}</p>
                <p className="font-medium">Price: {book.price}</p>
                {book.pages && <p className="font-medium">Pages: {book.pages}</p>}
              </div>

              <div className="ml-5 mb-5">
                <button
                  onClick={() => navigate(`/book-details/${book._id}`)}
                  className="btn btn-primary hover:scale-110 transition duration-500"
                >
                  Book details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
