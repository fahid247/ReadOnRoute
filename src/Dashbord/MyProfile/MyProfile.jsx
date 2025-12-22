import React from "react";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/UseAuth";
import Loading from "../../Components/Loading/Loading";

const MyProfile = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-semibold mb-4">You are not logged in</h2>
        <button onClick={() => navigate("/login")} className="btn btn-primary">
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div>
         <h2 className="text-4xl text-primary my-8 underline font-bold  text-center">
        <span className="text-base-content">My</span>  <span className="text-base-content">Profile</span>
      </h2>
      <section className=" bg-base-300  mx-auto p-2 flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            />
          </div>

          <h2 className="text-2xl font-bold mb-2">{user.displayName}</h2>
          <p className="text-gray-600 mb-6">{user.email}</p>

          <button
            onClick={() => navigate("/dashboard/update-profile")}
            className="btn btn-primary w-full"
          >
            Update Profile
          </button>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
