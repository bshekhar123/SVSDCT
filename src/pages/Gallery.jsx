import React, { useState, useEffect } from 'react';
import { images } from '../components/ImagesData';
import Footer from '../components/Footer';

const Gallery = () => {
  const [currentImages, setCurrentImages] = useState([]);
  const [archivedImages, setArchivedImages] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [showArchive, setShowArchive] = useState(false);

  useEffect(() => {
    const today = new Date();
    const recentImages = [];
    const archiveImages = [];

    images.forEach(image => {
      const imageDate = new Date(image.date);
      const daysDifference = (today - imageDate) / (1000 * 60 * 60 * 24);

      if (daysDifference < 60) {
        recentImages.push(image);
      } else {
        archiveImages.push(image);
      }
    });

    setCurrentImages(recentImages);
    setArchivedImages(archiveImages);
  }, []);

  const renderImages = (imageList) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-slideIn">
      {imageList.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-full h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setZoomedImage(image.src)}
        />
      ))}
    </div>
  );

  return (
    <>
        <div className="min-h-screen bg-white py-28 px-5 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
          Gallery
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center italic">
          "The work we do is more than just an event; it's a movement towards a better society."
        </p>

        <div className="flex justify-between mb-6">
          <button
            className={`${
              !showArchive ? 'bg-orange-600' : 'bg-gray-300'
            } text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition`}
            onClick={() => setShowArchive(false)}
          >
            View Current
          </button>
          <button
            className={`${
              showArchive ? 'bg-orange-600' : 'bg-gray-300'
            } text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition`}
            onClick={() => setShowArchive(true)}
          >
            View Archive
          </button>
        </div>

        {!showArchive && currentImages.length === 0 && (
          <p className="text-center text-gray-700 italic mb-10">
            No images available for the current period.
          </p>
        )}

        {showArchive && archivedImages.length === 0 && (
          <p className="text-center text-gray-700 italic mb-10">
            No images available in the archive.
          </p>
        )}

        {!showArchive && renderImages(currentImages)}
        {showArchive && renderImages(archivedImages)}

        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setZoomedImage(null)}
          >
            <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full rounded-lg" />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
};

export default Gallery;
