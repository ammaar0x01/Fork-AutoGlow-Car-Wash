
import React from "react";
import { Link } from "react-router-dom";


export default function NotFound() {
    document.title = "404 Error"

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 text-center px-4">
            {/* Container to center and style content */}
            <div className="p-10 rounded-2xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-2xl">
                <h1 className="text-7xl font-bold text-white mb-4 animate-bounce">
                    404
                </h1>
                <h2 className="text-4xl font-semibold text-white mb-6">
                    Oops! Page Not Found
                </h2>
                <p className="text-xl text-sky-100 mb-10 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    Don't worry, even the best travelers take wrong turns sometimes.
                </p>

                {/* Call to Action Button */}
                <Link
                    to="/"
                    className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
                >
                    Back to Home
                </Link>
            </div>

            {/* Subtle bottom text (optional) */}
            <p className="absolute bottom-6 text-sky-200 text-sm">
                Need assistance? <a href="/contact" className="underline hover:text-white">Contact our support team</a>.
            </p>
        </div>
    )
};
