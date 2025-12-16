import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header currentPage="pricing" />

      <main className="py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Rooms & Pricing</h1>
            <p className="mt-2 text-gray-300">
              Simple, inclusive pricing for monthly and short stays. Prices
              include utilities, Wi‑Fi and community events where applicable.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow transition transform hover:-translate-y-2">
              <img
                src="../assets/room1.svg"
                alt="Private Single"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">Private Single</h3>
              <div className="mt-2 text-2xl font-bold">
                ₹8,000 <span className="text-sm font-normal">/mo</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Furnished room</li>
                <li>• Shared bathroom</li>
                <li>• Wi‑Fi & utilities included</li>
              </ul>
              <Link
                to="/contact"
                className="mt-4 inline-block bg-primary text-black px-4 py-2 rounded"
              >
                Enquire
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow transition transform hover:-translate-y-2">
              <img
                src="../assets/room2.svg"
                alt="Deluxe Private"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">Deluxe Private</h3>
              <div className="mt-2 text-2xl font-bold">
                ₹12,000 <span className="text-sm font-normal">/mo</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Attached bathroom & balcony</li>
                <li>• Larger room</li>
                <li>• Utilities & weekly housekeeping</li>
              </ul>
              <Link
                to="/contact"
                className="mt-4 inline-block bg-primary text-black px-4 py-2 rounded"
              >
                Enquire
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow transition transform hover:-translate-y-2">
              <img
                src="../assets/room3.svg"
                alt="Shared Bunk"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">Shared Bunk</h3>
              <div className="mt-2 text-2xl font-bold">
                ₹4,000 <span className="text-sm font-normal">/mo</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Bunk bed in shared room</li>
                <li>• Secure locker</li>
                <li>• Utilities & community access</li>
              </ul>
              <Link
                to="/contact"
                className="mt-4 inline-block bg-primary text-black px-4 py-2 rounded"
              >
                Enquire
              </Link>
            </div>
          </div>

          <section className="mt-10 bg-gray-900 p-6 rounded-lg text-gray-300">
            <h3 className="text-xl font-semibold">What's included</h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• High-speed Wi‑Fi</li>
                <li>• Utilities</li>
                <li>• Weekly housekeeping</li>
              </ul>
              <ul className="space-y-2">
                <li>• Access to community events</li>
                <li>• Coworking spaces</li>
                <li>• Lockers & security</li>
              </ul>
            </div>
          </section>

          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-primary text-black px-5 py-3 rounded-lg font-semibold transition-transform transform hover:-translate-y-1"
            >
              Book now / Enquire
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
