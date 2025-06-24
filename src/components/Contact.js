import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-200"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-200"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
