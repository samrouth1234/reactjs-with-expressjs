import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, confirmPassword }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "Something went wrong!");
        return;
      }

      toast.success("Registered successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      toast.error("Unable to connect to the server. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="container max-w-screen-xl flex justify-center mx-auto items-center h-screen p-5">
      <ToastContainer />
      <div className="border md:w-[450px] w-full p-5 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center py-4">Register</h2>
        {/* Username */}
        <div className="w-full">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter username"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-300 p-2.5 mt-2"
          />
        </div>
        {/* Email */}
        <div className="mt-3">
          <label htmlFor="email" className="text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-300 p-2.5 mt-2"
          />
        </div>
        {/* Password */}
        <div className="mt-3">
          <label
            htmlFor="password"
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
        </div>
        {/* Confirm Password */}
        <div className="mt-3">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-900"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter Confirm Password"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-300 p-2.5 mt-2"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-center"
            >
              {showPassword ? (
                <IoEyeOutline size={20} />
              ) : (
                <IoEyeOffOutline size={20} />
              )}
            </button>
          </div>
        </div>
        <span className="flex justify-end">
          <Link to={""} className="text-sm hover:underline py-2">
            Forgot password?
          </Link>
        </span>

        <button
          className="bg-black w-full text-white py-2.5 rounded-md mt-3 text-md font-medium"
          onClick={handleSubmit}
        >
          Register
        </button>
        <div className="text-center mb-4 text-gray-400 relative flex items-center mt-5">
          <div className="inline-flex h-[1px] bg-gray-300 flex-auto mr-4"></div>
          <span className="flex-shrink-0">OR</span>
          <div className="inline-flex h-[1px] bg-gray-300 flex-auto ml-4"></div>
        </div>
        <button className="bg-gray-300 flex justify-center items-center gap-3 w-full py-2.5 rounded-md text-md font-medium">
          <FcGoogle size={20} />
          Login with Google
        </button>
        <p className="text-center pt-5 text-base">
          Already have an account?{" "}
          <Link to={"/login"} className="hover:underline ps-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
