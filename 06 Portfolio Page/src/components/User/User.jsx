import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-white flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center border-t-4 border-orange-500">
        {/* Avatar */}
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userid}`}
          alt="Avatar"
          className="w-28 h-28 mx-auto rounded-full border-4 border-orange-400 shadow-md mb-4"
        />

        {/* User Info */}
        <h2 className="text-2xl font-bold text-orange-700">
          Welcome, {userid}!
        </h2>
        <p className="text-gray-600 mt-2">
          This is your user page. Here you can add your preferences, settings,
          and more info.
        </p>

        {/* Placeholder User Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xl font-bold text-orange-700">34</p>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
          <div>
            <p className="text-xl font-bold text-orange-700">120</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-xl font-bold text-orange-700">85</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        {/* Call-to-action Button */}
        <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
