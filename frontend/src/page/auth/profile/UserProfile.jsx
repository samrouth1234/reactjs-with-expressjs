import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuCircleUser, LuLockKeyhole } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="flex container max-w-screen-xl justify-center items-center mx-auto ">
      {/* <!-- Main Container --> */}
      <div class="flex w-full h-screen">
        {/* <!-- Sidebar --> */}
        <div class="w-1/5 flex flex-col justify-between bg-white shadow-lg">
          <section>
            <div class="p-6 text-3xl font-bold text-blue-700">KhmengCode</div>
            <nav class="mt-10">
              <Link
                onClick={() => setActiveSection("profile")}
                className={`flex items-center gap-3 py-3 px-6 text-gray-700 text-lg font-semibold hover:bg-blue-100 ${
                  activeSection === "profile" ? "bg-blue-100" : ""
                }`}
              >
                <span>
                  <LuCircleUser size={24} />
                </span>
                Profile
              </Link>
              <Link
                onClick={() => setActiveSection("edit")}
                className={`flex items-center gap-3 py-3 px-6 text-gray-700 text-lg font-semibold hover:bg-blue-100 ${
                  activeSection === "edit" ? "bg-blue-100" : ""
                }`}
              >
                <span>
                  <FaRegEdit size={24} />
                </span>
                Edit
              </Link>
              <Link
                onClick={() => setActiveSection("password")}
                className={`flex items-center gap-3 py-3 px-6 text-gray-700 text-lg font-semibold hover:bg-blue-100 ${
                  activeSection === "password" ? "bg-blue-100" : ""
                }`}
              >
                <span>
                  <LuLockKeyhole size={24} />
                </span>
                Password
              </Link>
              <Link
                onClick={() => setActiveSection("setting")}
                className={`flex items-center gap-3 py-3 px-6 text-gray-700 text-lg font-semibold hover:bg-blue-100 ${
                  activeSection === "setting" ? "bg-blue-100" : ""
                }`}
                class="flex items-center gap-3 py-3 px-6 text-gray-700 text-lg font-semibold hover:bg-blue-100"
              >
                <span>
                  <IoSettingsOutline size={24} />
                </span>
                Settings
              </Link>
            </nav>
          </section>
          <section className="mb-20">
            <button className="w-full flex items-center gap-3 py-3 px-6 text-gray-700 text-lg font-semibold hover:bg-blue-100">
              <CgLogOut size={24} />
              Logout
            </button>
          </section>
        </div>

        {/* <!-- Main Profile Section --> */}
        <div class="w-4/5 p-8 bg-gray-50">
          <div class="flex justify-between mb-8">
            <div>
              <h2 class="text-2xl font-semibold">
                Information <span className="text-red-400">*</span>
              </h2>
            </div>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src="https://kstore-shop.vercel.app/img/blog/profile-04.png"
                  alt="User Icon"
                />
              </div>
            </div>
          </div>
          {/* Profile */}
          {activeSection === "profile" && (
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-8">
                <div class="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src="https://kstore-shop.vercel.app/img/blog/profile-04.png"
                    alt="User Icon"
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
          )}
          {/* Edit */}
          {activeSection === "edit" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Edit Information</h2>
              <form>
                {/* Add inputs for editing user information */}
                <div className="mb-6">
                  <label className="block text-gray-600 text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="eg. Alaa"
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-600 text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="eg. Mohamed"
                    className="w-full border rounded p-2"
                  />
                </div>
              </form>
            </div>
          )}
          {/* Password */}
          {activeSection === "password" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
              <form>
                {/* Add inputs for changing password */}
                <div className="mb-6">
                  <label className="block text-gray-600 text-sm mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-600 text-sm mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full border rounded p-2"
                  />
                </div>
              </form>
            </div>
          )}
          {/* Setting */}
          {activeSection === "setting" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                All User Information
              </h2>
              <p>Display all user's details here in a structured format.</p>
              {/* Add content for showing all information */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
