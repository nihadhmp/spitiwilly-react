import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header currentPage="about" />

      <main className="py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <section className="mb-8">
            <h1 className="text-3xl font-bold">Our Story</h1>
            <p className="mt-4 text-gray-300">
              Spitiwilly Co.Living began as a small experiment: a group of
              friends and travellers who wanted more than just a place to sleep
              — a place to belong. Located in Thiruvannur, Calicut, we opened
              our doors to people seeking connection, growth and affordable
              comfort.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-3 text-gray-300">
              We cultivate a welcoming, creative and supportive community where
              residents can connect, grow their careers, and share life
              experiences. Our mission is to turn everyday living into shared
              learning and memorable evenings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold">What makes us unique</h2>
            <ul className="mt-3 space-y-3 text-gray-300">
              <li>
                • Evenings dedicated to stranger travel tales, career experience
                sharing, and network growth.
              </li>
              <li>
                • Carefully curated community events and celebration nights.
              </li>
              <li>
                • Comfortable private rooms plus large shared coworking and
                lounge spaces.
              </li>
              <li>• Transparent pricing and inclusive utilities.</li>
            </ul>
          </section>

          <section className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-primary text-black px-5 py-3 rounded-lg font-semibold transition-transform transform hover:-translate-y-1"
            >
              Book Your Stay
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
