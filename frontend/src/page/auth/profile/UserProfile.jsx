import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="container max-w-screen-xl flex justify-center mx-auto">
      {/* <!-- Main Container --> */}
      <div class="flex w-full h-screen">
        {/* <!-- Sidebar --> */}
        <div class="w-1/5 bg-white shadow-lg">
          <div class="p-6 text-3xl font-bold text-blue-700">Profile</div>
          <nav class="mt-10">
            <Link to="#" class="block py-3 px-6 text-gray-700 hover:bg-blue-100">
              Dashboard
            </Link>
            <Link to="#" class="block py-3 px-6 text-gray-700 hover:bg-blue-100">
              My Tasks
            </Link>
            <Link to="#" class="block py-3 px-6 text-gray-700 hover:bg-blue-100">
              Manage Team
            </Link>
            <Link to="#" class="block py-3 px-6 text-gray-700 hover:bg-blue-100">
              Settings
            </Link>
          </nav>
        </div>

        {/* <!-- Main Profile Section --> */}
        <div class="w-4/5 p-8 bg-gray-50">
          <div class="flex justify-between mb-8">
            <div>
              <h2 class="text-2xl font-semibold">User Profile</h2>
            </div>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src="https://via.placeholder.com/40" alt="User Icon" />
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="flex items-center mb-8">
              <div class="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Profile Photo"
                />
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold">Alaa Mohamed</h3>
                <p class="text-gray-600">Product Design</p>
                <p class="text-gray-500 text-sm">
                  Eastern European Time (EET), Cairo UTC +3
                </p>
              </div>
              <div class="ml-auto">
                <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Upload New Photo
                </button>
                <button class="ml-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                  Delete
                </button>
              </div>
            </div>

            <div>
              <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-gray-600 text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="eg. Alaa"
                    class="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label class="block text-gray-600 text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="eg. Mohamed"
                    class="w-full border rounded p-2"
                  />
                </div>
              </div>
              <div class="mb-6">
                <label class="block text-gray-600 text-sm mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="eg. alaa.mohamed"
                  class="w-full border rounded p-2"
                />
              </div>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-600 text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    class="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label class="block text-gray-600 text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+123456789"
                    class="w-full border rounded p-2"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
