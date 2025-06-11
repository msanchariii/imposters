import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl shadow-xl max-w-lg mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out border border-gray-200">
                <svg
                    className="w-28 h-28 text-purple-500 mb-6 animate-float"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <style>
                        {`
            @keyframes float {
              0% { transform: translateY(0px) rotate(0deg); }
              25% { transform: translateY(-5px) rotate(-3deg); }
              50% { transform: translateY(0px) rotate(0deg); }
              75% { transform: translateY(5px) rotate(3deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
            .animate-float {
              animation: float 4s ease-in-out infinite;
            }
          `}
                    </style>
                    <path
                        fillRule="evenodd"
                        d="M11.968 2.516a.75.75 0 01.064 0l6.398 1.458A.75.75 0 0119 4.418v5.25a.75.75 0 01-.106.37L12 21.053 5.106 10.038A.75.75 0 015 9.668V4.418a.75.75 0 01.535-.725L11.968 2.516zM7.228 10.231L12 18.067l4.772-7.836A.75.75 0 0117 9.668V5.378l-4.968-1.135a.75.75 0 01-.064 0L7 5.378v4.29a.75.75 0 01.228.563z"
                        clipRule="evenodd"
                    />
                    <path d="M12 7a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75A.75.75 0 0112 7z" />
                    <path d="M8.25 9.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM14.25 9.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75z" />
                </svg>

                <h1 className="text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
                    404
                </h1>

                <h2 className="text-3xl font-semibold text-purple-600 mb-4">
                    Lost in Space!
                </h2>

                <p className="text-gray-700 text-lg mb-8 max-w-sm leading-relaxed">
                    It seems the page you&#39;re looking for has embarked on an
                    interstellar adventure and isn&#39;t here right now. Try
                    heading back home!
                </p>

                <Link
                    href={"/"}
                    className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-200 ease-in-out transform hover:-translate-y-1"
                >
                    Take Me Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
