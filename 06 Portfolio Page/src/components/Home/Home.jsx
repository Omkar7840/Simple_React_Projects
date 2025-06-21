import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <aside className="relative overflow-hidden bg-gradient-to-r from-orange-50 to-white text-black rounded-lg my-10 py-16 px-6 sm:flex sm:items-center sm:justify-between">
        {/* Text */}
        <div className="sm:w-1/2 space-y-6 sm:ml-4">
          <h2 className="text-4xl font-bold sm:text-5xl leading-tight">
            Download Now
            <span className="block text-orange-700">
              Your productivity booster
            </span>
          </h2>
          <p className="text-gray-700 text-lg">
            Get access to exclusive features and enhance your workflow like
            never before.
          </p>
          <Link
            className="inline-flex items-center px-6 py-3 text-white bg-orange-700 hover:bg-orange-800 rounded-lg font-medium transition"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
              />
            </svg>
            Download Now
          </Link>
        </div>

        {/* Image */}
        <div className="sm:w-1/2 mt-10 sm:mt-0 flex justify-center">
          <img
            className="w-80 rounded-lg shadow-lg"
            src="https://static.vecteezy.com/system/resources/previews/036/290/329/non_2x/about-us-metaphor-company-information-flat-illustration-template-business-profile-office-information-customer-support-our-team-about-company-vector.jpg"
            alt="Download illustration"
          />
        </div>
      </aside>

      {/* Features Section */}
      <section className="py-14 bg-white rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-center text-orange-800 mb-8">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-6">
          <div>
            <img
              src="https://img.icons8.com/fluency/96/rocket.png"
              alt="Fast Performance"
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">Fast Performance</h4>
            <p className="text-gray-600 text-sm mt-2">
              Optimized for speed and reliability to help you get things done.
            </p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/fluency/96/lock--v1.png"
              alt="Secure"
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">Secure & Private</h4>
            <p className="text-gray-600 text-sm mt-2">
              Your data is safe and encrypted with top-notch security protocols.
            </p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/fluency/96/customer-support.png"
              alt="Support"
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">24/7 Support</h4>
            <p className="text-gray-600 text-sm mt-2">
              Need help? Our friendly support team is available around the
              clock.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="sm:w-96 w-48 rounded-xl shadow-lg"
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Remote work"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-4xl py-12 font-medium text-gray-800">
        Built for Teams, Loved by Individuals
      </h1>
    </div>
  );
}
