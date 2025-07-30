import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
        WhatsApp Message Scheduler
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Schedule your WhatsApp messages easily and stay connected on time.
      </p>
      <a
        href="/app"
        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg transition duration-300"
      >
        Let’s Start
      </a>
    </div>
  );
}
