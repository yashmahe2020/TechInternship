import React from "react";

interface GalleryProps {
  images: string[];
}

const Gallery2: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
