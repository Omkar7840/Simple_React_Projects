import React, { useEffect, useState } from "react";

export default function GithubProfile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Omkar7840")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg border-t-4 border-orange-600">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <img
            src={data?.avatar_url}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Name and Username */}
          <h2 className="text-3xl font-extrabold mt-4 text-orange-700">
            {data?.name || "No name available"}
          </h2>
          <p className="text-gray-600 text-sm mb-4">@{data?.login}</p>

          {/* Bio */}
          {data?.bio && (
            <p className="text-gray-700 italic text-center max-w-xs mb-4">
              “{data.bio}”
            </p>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 w-full my-6 text-center">
            <div>
              <p className="text-2xl font-bold text-orange-700">
                {data?.followers}
              </p>
              <p className="text-gray-500 text-sm">Followers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-700">
                {data?.following}
              </p>
              <p className="text-gray-500 text-sm">Following</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-700">
                {data?.public_repos}
              </p>
              <p className="text-gray-500 text-sm">Repos</p>
            </div>
          </div>

          {/* GitHub Button */}
          {data?.html_url && (
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-orange-700 text-white px-6 py-2 rounded-full hover:bg-orange-800 transition"
            >
              🔗 Visit GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
