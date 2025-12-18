import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useNavigate } from "react-router";


const AllBooks = () => {
    const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

    const {data:books=[]}=useQuery({
        queryKey:['AllBooks'],
        queryFn: async () =>{
            const res  = await axiosSecure.get('/AllBooks')
            return res.data;
        }
    })
  return (
    <section className="py-16 bg-base-300 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          All Books
        </h2>

        <div className="flex justify-center mb-10 max-w-md mx-auto">
          <input
            type="text"
            
            
            placeholder="Search by book name..."
            className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            className="bg-primary hover:bg-secondary-content text-white px-5 rounded-r-md transition"
           
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          { books.map((book) => (
                <div
                  key={book._id}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={book.image}
                    alt={book.name}
                    className="w-full h-48 object-cover    "
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-1">{book.name}</h3>
                    <p className="text-gray-600 mb-1">{book.author}</p>
                    <p className="font-medium">Price : {book.price}</p>
                  </div>

                  <div className="ml-5 mb-5">
                    <button onClick={()=>{navigate(`/book-details/${book._id}`)}} className="btn btn-primary">Book details</button>
                  </div>
                </div>
              ))
           }
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
