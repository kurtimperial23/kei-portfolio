import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <form className="bg-gray-700 p-6 rounded-lg w-full max-w-md">
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 bg-gray-900 border border-gray-700 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 bg-gray-900 border border-gray-700 rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 mb-4 bg-gray-900 border border-gray-700 rounded h-32"></textarea>
        <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-700 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
