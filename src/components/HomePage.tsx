import React from "react";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white px-6">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center w-full flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-6 max-w-2xl text-center">
        Capturing moments, telling stories – Explore my world of photography and video editing.
      </p>
      <button
        className="px-8 py-4 text-xl bg-blue-500 hover:bg-blue-700 transition rounded-lg mb-10"
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
      >
        View My Work
      </button>
    </motion.div>

      {/* Extended Sections */}
      <div className="w-full bg-gray-800 py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">My Work</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Here are some of my favorite photography and editing projects. I specialize in portraits, landscapes, and commercial photography.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">Image 1</div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">Image 2</div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">Image 3</div>
        </div>
      </div>

      <div className="w-full bg-gray-900 py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg">
          I am a professional photographer and editor with years of experience in capturing stunning visuals. My goal is to tell compelling stories through my lens.
        </p>
      </div>

      <div className="w-full bg-gray-800 py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Want to collaborate or hire me for a project? Reach out via email or follow me on social media!
        </p>
        <button className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-700 transition rounded-lg">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default HomePage;