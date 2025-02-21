import React from "react";

const Gallery: React.FC = () => {
  const images = [
    "/images/sample1.jpg",
    "/images/sample2.jpg",
    "/images/sample3.jpg"
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className="rounded-lg shadow-lg" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
