import { useQuery, useMutation } from "@tanstack/react-query";
import React from "react";
import { useParams, useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const EditBook = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  // Fetch the book
  const { data: book, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/AllBooks/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      // Populate form with existing data
      reset({
        name: data.name,
        author: data.author,
        image: data.image,
        description: data.description,
        category: data.category,
        price: data.price,
        pages: data.pages,
        publisher: data.publisher,
        language: data.language,
      });
    },
  });

  // Mutation to update book
  const updateMutation = useMutation({
    mutationFn: async (updatedBook) => {
      return axiosSecure.patch(`/AllBooks/${id}`, updatedBook);
    },
    onSuccess: () => {
      Swal.fire("Updated!", "Book updated successfully", "success");
      navigate("/dashboard/myBooks");
    },
  });

  const onSubmit = (data) => {
    updateMutation.mutate({
      name: data.name,
      author: data.author,
      image: data.image,
      description: data.description,
      category: data.category,
      price: Number(data.price),
      pages: Number(data.pages),
      publisher: data.publisher,
      language: data.language,
    });
  };

  if (isLoading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Edit "{book.name}" Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name")}
          className="input input-bordered w-full"
          placeholder="Book Name"
          defaultValue={book.name}
        />
        <input
          {...register("author")}
          className="input input-bordered w-full"
          placeholder="Author"
          defaultValue={book.author}
        />
        <input
          {...register("image")}
          className="input input-bordered w-full"
          placeholder="Image URL"
          defaultValue={book.image}
        />

        <textarea
          {...register("description")}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          defaultValue={book.description}
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            {...register("category")}
            className="input input-bordered"
            placeholder="Category"
            defaultValue={book.category}
          />
          <input
            type="number"
            {...register("price")}
            className="input input-bordered"
            placeholder="Price"
            defaultValue={book.price}
          />
          <input
            type="number"
            {...register("pages")}
            className="input input-bordered"
            placeholder="Pages"
            defaultValue={book.pages}
          />
          <input
            {...register("publisher")}
            className="input input-bordered"
            placeholder="Publisher"
            defaultValue={book.publisher}
          />
        </div>

        <input
          {...register("language")}
          className="input input-bordered w-full"
          placeholder="Language"
          defaultValue={book.language}
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={updateMutation.isLoading}
        >
          Update Book
        </button>
      </form>
    </section>
  );
};

export default EditBook;
