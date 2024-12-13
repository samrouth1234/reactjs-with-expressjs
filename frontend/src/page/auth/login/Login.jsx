import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || 'Something went wrong!');
        return;
      }
      toast('Login successfully');
      // navigate('/');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      toast.error('Unable to connect to the server. Please try again.');
    } 
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl text-center font-bold text-violet-500">គណនីរបស់អ្នក</h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              អ៊ីមែល
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="samrouth@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              លេខសម្ងាត់
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-violet-400 rounded bg-gray-50 focus:ring-3 focus:ring-violet-500"
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-500"
            >
              ចងចាំ
            </label>
            <Link to="" className="ms-auto text-sm text-violet-500 hover:underline">
              ភ្លេចលេខសម្ងាត់?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-violet-500 hover:bg-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            ចូលគណនី
          </button>
          <div className="text-sm text-center font-medium text-gray-500">
            តើអ្នកមានគណនីឬទេ​​ ?
            <Link to="/register" className="text-violet-500 hover:underline ps-2">
              បង្កើតគណនីថ្មី
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
