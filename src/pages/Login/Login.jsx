import React from "react";
import image from "../../assets/Screenshot 2025-12-17 113021.png";
import { useForm } from "react-hook-form";
import ReadOnRouteLogo from "../../Components/Logo/ReadOnRouteLogo";
import { Link, useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAuth from "../../Hooks/UseAuth";

const Login = () => {
  const { signInGoogle ,updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user.photoURL);

        // create user in the database
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          console.log("user data has been stored", res.data);
          
        });



         const userProfile = {
                            photoURL: result.user.photoURL 
                        }

                        updateUserProfile(userProfile)
                            .then(() => {
                                // console.log('user profile updated done.')
                                navigate(location.state || '/');
                            })
                            .catch(error => console.log(error))



      })
      .catch((error) => {
        console.log(error);
      });


     


  };

  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex">
      <div className="form flex-1">
        <div className="min-h-screen flex items-center justify-center bg-base-100">
          <div className="w-full max-w-md p-4">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <Link to={"/"}>
                <ReadOnRouteLogo></ReadOnRouteLogo>
              </Link>
            </div>

            {/* Heading */}
            <h1 className="text-4xl text-base-content font-bold mb-2">
              Hello,
            </h1>
            <h2 className="text-4xl text-base-content font-bold mb-3">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-400 mb-8">
              Hey, welcome back to your special place
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-error text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                    {...register("remember")}
                  />
                  <span>Remember me</span>
                </label>

                <a href="#" className="text-primary hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Button */}
              <button className="btn btn-primary w-full mt-4">Sign In</button>
            </form>

            <button onClick={handleGoogleSignIn} className="btn w-full mt-4 bg-white text-black border-[#cfcbcb]">
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

            {/* Footer */}
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
