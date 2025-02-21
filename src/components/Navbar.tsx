import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-900 text-white p-4 fixed top-0 left-0 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">My Portfolio</span>
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/Gallery" className="hover:text-blue-400">Gallery</Link>
          <Link href="/About" className="hover:text-blue-400">About</Link>
          <Link href="/Contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
