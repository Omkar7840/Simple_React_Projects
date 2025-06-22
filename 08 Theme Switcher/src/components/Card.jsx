import React from "react";

export default function Card() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-900 dark:border-gray-700 hover:shadow-2xl transition duration-300 ease-in-out">
      <a href="/">
        <img
          className="object-cover w-full h-60 transition-transform duration-300 hover:scale-105"
          src="https://www.imagineonline.store/cdn/shop/files/Apple_Watch_Series_7_GPS_45mm_Starlight_Aluminum_Starlight_Sport_Band_PDP_Image_Position-2__EAEN.jpg?v=1698883715&width=1445"
          alt="Apple Watch"
        />
      </a>
      <div className="p-5">
        <a href="/">
          <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS – Starlight Aluminium Case
          </h5>
        </a>

        {/* Rating */}
        <div className="flex items-center mt-2 space-x-1">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.371-2.447a1 1 0 00-1.175 0l-3.371 2.447c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
              </svg>
            ))}
          <svg
            className="w-5 h-5 text-gray-300 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.371-2.447a1 1 0 00-1.175 0l-3.371 2.447c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
          </svg>
          <span className="ml-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            4.0
          </span>
        </div>

        {/* Price & Button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
