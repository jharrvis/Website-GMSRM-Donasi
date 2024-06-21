"use client";

import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-40 object-cover cursor-pointer transform transition duration-200 hover:scale-105"
              onClick={() => openModal(image)}
            />
            <p className="mt-2 text-center">{image.description}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full"
            />
            <p className="mt-2 text-center text-white">
              {currentImage.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
