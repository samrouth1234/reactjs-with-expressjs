import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../../hooks/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Call login function
      toast.success("Login successful!");
      // const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   toast.error(data.message || "Something went wrong!");
      //   return;
      // }
      // toast("Login successfully");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      // toast.error("Unable to connect to the server. Please try again.");
      toast.error(error.message || "Login failed!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="container max-w-screen-xl flex justify-center mx-auto items-center h-screen p-5">
      <ToastContainer />
      <div className="border md:w-[450px] w-full p-5 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center py-4">Log In</h2>
        <div className="w-full">
          <label for="username" className="text-sm font-medium text-gray-900">
            Username or Email
          </label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter username or email address"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-300 p-2.5 mt-2"
          />
        </div>
        <div className="mt-3">
          <label
            for="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-300 p-2.5 mt-2"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <IoEyeOutline size={20} />
              ) : (
                <IoEyeOffOutline size={20} />
              )}
            </button>
          </div>
          <span className="flex justify-end">
            <Link to={""} className="text-sm hover:underline py-2">
              Forgot password?
            </Link>
          </span>
        </div>
        <button
          className=" bg-black w-full text-white py-2.5 rounded-md mt-3 text-md font-medium"
          onClick={handleSubmit}
        >
          LOG IN
        </button>
        <div class="text-center mb-4 text-gray-400 relative flex items-center mt-5">
          <div class="inline-flex h-[1px] bg-gray-300 flex-auto mr-4"></div>
          <span class="flex-shrink-0">OR</span>
          <div class="inline-flex h-[1px] bg-gray-300 flex-auto ml-4"></div>
        </div>
        <button className="bg-gray-300 flex justify-center items-center gap-3 w-full py-2.5 rounded-md text-md font-medium">
          <span>
            <FcGoogle size={20} />
          </span>{" "}
          Login with google
        </button>
        <p className="text-center pt-5 text-base">
          Don't have an account?{" "}
          <Link to={"/register"} className="hover:underline ps-2">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
