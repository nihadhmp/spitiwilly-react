import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFormSubmission from "../hooks/useFormSubmission";
import { FaInstagram } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { isSubmitting, submitToEndpoint } = useFormSubmission();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please provide name and email.");
      return;
    }

    try {
      const result = await submitToEndpoint(formData);
      if (result.success) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        toast.success("Thanks! We received your message.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header currentPage="contact" />

      <main className="py-10 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold">Contact & Directions</h1>
          <p className="mt-2 text-gray-300">
            Reach us by email, phone or using the contact form below.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="font-semibold">Get in touch</h2>
              <p className="mt-2 text-gray-300">
                Email:{" "}
                <a href="mailto:spitiwilly@gmail.com" className="text-primary">
                  spitiwilly@gmail.com
                </a>
                <br />
                Phone:{" "}
                <a href="tel:+919946781706" className="text-primary">
                  +91 9946781706
                </a>
              </p>

              <form
                id="contact-form"
                className="mt-6 grid grid-cols-1 gap-4 w-full"
                onSubmit={handleSubmit}
              >
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="border rounded px-3 py-2 bg-gray-900 text-gray-100"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border rounded px-3 py-2 bg-gray-900 text-gray-100"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className="border rounded px-3 py-2 bg-gray-900 text-gray-100"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  className="border rounded px-3 py-2 bg-gray-900 text-gray-100"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="bg-primary text-black px-4 py-2 rounded"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            <div>
              <h2 className="font-semibold">Find us</h2>
              <p className="mt-2 text-gray-300">
                Thiruvannur, Calicut — close to local markets and transport.
              </p>
              <div className="mt-4 w-full h-64 rounded overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  frameBorder="0"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Thiruvannur+Calicut&output=embed"
                  title="Location Map"
                ></iframe>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold">Social Media</h3>
                <div className="mt-1  items-center flex gap-3 text-primary">
                  <a
                    className="cursor-pointer flex items-center gap-1"
                    href="https://www.instagram.com/spitiwilly.coliving/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                    <p className="text-primary">Instagram</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
