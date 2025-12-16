import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useGallery from "../hooks/useGallery";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";

const Community = () => {
  const { isModalOpen, modalImageSrc, openGalleryModal, closeGalleryModal } =
    useGallery();

  const handleGalleryClick = (src) => {
    openGalleryModal(src);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header currentPage="community" />

      <main className="py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Community & Events</h1>
            <p className="mt-2 text-gray-300">
              Our calendar is built around storytelling, skill-sharing, and
              celebrations — designed to help residents connect and grow.
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg transition hover:shadow-lg">
              <h3 className="font-semibold">Weekly Events</h3>
              <p className="mt-2 text-gray-300">
                Workshops, co-cooking nights, and skill-shares where residents
                teach one another.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition hover:shadow-lg">
              <h3 className="font-semibold">Travel-tale Evenings</h3>
              <p className="mt-2 text-gray-300">
                Evenings dedicated to stranger travel tales — bring a story and
                find a new friend.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition hover:shadow-lg">
              <h3 className="font-semibold">Celebration Nights</h3>
              <p className="mt-2 text-gray-300">
                Festivals, birthdays and seasonal dinners — everyone pitches in
                to celebrate.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Gallery</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src={gallery1}
                className="h-40 w-full object-cover rounded-lg cursor-pointer"
                alt="gallery1"
                onClick={() => handleGalleryClick(gallery1)}
              />
              <img
                src={gallery2}
                className="h-40 w-full object-cover rounded-lg cursor-pointer"
                alt="gallery2"
                onClick={() => handleGalleryClick(gallery2)}
              />
              <img
                src={gallery3}
                className="h-40 w-full object-cover rounded-lg cursor-pointer"
                alt="gallery3"
                onClick={() => handleGalleryClick("../assets/gallery3.svg")}
              />
            </div>
          </section>

          {/* <section className="mt-10">
            <h2 className="text-2xl font-semibold">Testimonials</h2>
            <div className="mt-4 space-y-4">
              <blockquote className="bg-gray-800 p-4 rounded">
                "Spitiwilly helped me find collaborators and friends." — Asha
              </blockquote>
              <blockquote className="bg-gray-800 p-4 rounded">
                "The travel-tale nights are the highlight every month." — Rohan
              </blockquote>
            </div>
          </section> */}
        </div>
      </main>

      {/* Gallery modal */}
      {/* <div
        id="gallery-modal"
        className={`fixed inset-0 bg-black/90 z-50 items-center justify-center p-4 ${
          isModalOpen ? "flex" : "hidden"
        }`}
      >
        <button
          id="gallery-close"
          className="absolute top-4 right-4 text-white text-2xl md:top-6 md:right-6"
          onClick={closeGalleryModal}
        >
          ✕
        </button>
        <img
          id="gallery-full"
          src={modalImageSrc}
          alt="full"
          className="max-h-[80vh] max-w-full rounded shadow-lg object-contain"
        />
      </div> */}

      <Footer />
    </div>
  );
};

export default Community;
