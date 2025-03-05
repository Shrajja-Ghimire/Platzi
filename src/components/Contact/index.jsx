import React from "react";

const Contact = () => {
  return (
    <div className=" flex justify-center mt- 5 mx-4 md:mx-10 mb-10 p-4">
      <div className="w-full max-w-lg shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl text-center font-bold text-gray-800 pb-6">
          Contact with us
        </h1>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="w-full h-12 border border-gray-300 bg-white p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
          />

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="w-full h-12 border border-gray-300 bg-white p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
          />

          <textarea
            placeholder="Your message"
            className="w-full h-32 border border-gray-300 bg-white p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
          />

          <button className="bg-gradient-to-r from-amber-500 to-amber-800 text-white p-3 rounded-lg w-full md:w-auto font-semibold hover:shadow-md transform hover:scale-105 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
