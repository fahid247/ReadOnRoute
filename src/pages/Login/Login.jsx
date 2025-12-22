import React from "react";
import image from "../../assets/Screenshot 2025-12-17 113021.png";
import { useForm } from "react-hook-form";
import ReadOnRouteLogo from "../../Components/Logo/ReadOnRouteLogo";
import { Link, useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signInGoogle, updateUserProfile, signInUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };

        axiosSecure.post("/users", userInfo).then(() => {
          const userProfile = { photoURL: result.user.photoURL };
          updateUserProfile(userProfile)
            .then(() => {
              Swal.fire({
                icon: "success",
                title: "Logged in successfully!",
                text: `Welcome back, ${result.user.displayName}`,
                timer: 2000,
                showConfirmButton: false,
              });
              navigate(location.state || "/");
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: error.message,
        });
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Logged in successfully!",
          text: `Welcome back, ${result.user.displayName || data.email}`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex">
      <div className="form flex-1">
        <div className="min-h-screen flex items-center justify-center bg-base-100">
          <div className="w-full max-w-md p-4">
            <div className="flex items-center gap-2 mb-5">
              <Link to={"/"}>
                <ReadOnRouteLogo />
              </Link>
            </div>

            <h1 className="text-4xl text-base-content font-bold mb-2">Hello,</h1>
            <h2 className="text-4xl text-base-content font-bold mb-3">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-400 mb-8">
              Hey, welcome back to your special place
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <p className="text-error text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <a className="text-primary hover:underline">Forgot Password?</a>
              </div>

              <button className="btn btn-primary w-full mt-4">Sign In</button>
            </form>

            <button
              onClick={handleGoogleSignIn}
              className="btn w-full mt-4 bg-white text-black border-[#cfcbcb]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="text-sm text-center mt-4">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="text-primary font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="picture flex-1 p-3 flex justify-center items-center bg-base-100">
        <img src={image} className="max-h-[92vh] rounded-2xl mx-auto" />
      </div>
    </div>
  );
};

export default Login;
