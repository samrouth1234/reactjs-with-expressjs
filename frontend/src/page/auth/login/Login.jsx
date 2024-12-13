import React, { useState } from 'react';

const Login = () => {
  const [user,setUser] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [error,setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/v1/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password}),
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="login-container">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form class="space-y-6" action="#">
          <h5 class="text-xl text-center font-bold text-violet-500">
            គណនីរបស់អ្នក
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              អ៊ីមែល
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="samrouth@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              លេខសម្ងាត់
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-violet-400 rounded bg-gray-50 focus:ring-3 focus:ring-violet-500"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-500"
              >
                ចងចាំ
              </label>
            </div>
            <a href="#" class="ms-auto text-sm text-violet-500 hover:underline ">
              ភ្លេចលេខសម្ងាត់?
            </a>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-violet-500 hover:bg-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            ចូលគណនី
          </button>
          <div class="text-sm text-center font-medium text-gray-500 ">
            តើអ្នកមានគណនីឬទេ​​ ?{" "}
            <a href="#" class="text-violet-500 hover:underline ps-2">
              បង្កើតគណនីថ្មី
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
