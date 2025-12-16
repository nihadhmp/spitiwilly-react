import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useMobileMenu from "../hooks/useMobileMenu";
import useBookingModal from "../hooks/useBookingModal";
import useGallery from "../hooks/useGallery";
import useFormSubmission from "../hooks/useFormSubmission";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import community1 from "../assets/community1.jpg";
import { FaWifi, FaLaptopCode, FaLock } from "react-icons/fa";
import { LuWashingMachine } from "react-icons/lu";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdGroups } from "react-icons/md";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";

const Home = () => {
  const [showBookingFields, setShowBookingFields] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    roomType: "private_single",
    message: "",
  });

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "enquiry",
    checkin: "",
    checkout: "",
    room_type: "private_single",
    message: "",
  });

  const { isMenuOpen, toggleMenu } = useMobileMenu();
  const {
    isModalOpen: isBookingModalOpen,
    openModal: openBookingModal,
    closeModal: closeBookingModal,
  } = useBookingModal();
  const {
    isModalOpen: isGalleryModalOpen,
    modalImageSrc,
    openGalleryModal,
    closeGalleryModal,
  } = useGallery();
  const { isSubmitting, submitToEndpoint } = useFormSubmission();

  const handlePurposeChange = (e) => {
    const value = e.target.value;
    setContactData({ ...contactData, purpose: value });
    setShowBookingFields(value === "booking");
  };

  const handleContactChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email) {
      toast.error("Please provide name and email.");
      return;
    }

    try {
      const result = await submitToEndpoint(contactData);
      if (result.success) {
        setContactData({
          name: "",
          email: "",
          phone: "",
          purpose: "enquiry",
          checkin: "",
          checkout: "",
          room_type: "private_single",
          message: "",
        });
        setShowBookingFields(false);
        toast.success("Thanks! We received your message.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!bookingData.name || !bookingData.email) {
      toast.error("Please provide name and email.");
      return;
    }

    try {
      // Prepare booking data with proper field names
      const bookingPayload = {
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        checkin: bookingData.checkin,
        checkout: bookingData.checkout,
        room_type: bookingData.roomType,
        message: bookingData.message,
        purpose: "booking",
      };

      const result = await submitToEndpoint(bookingPayload);
      if (result.success) {
        setBookingData({
          name: "",
          email: "",
          phone: "",
          checkin: "",
          checkout: "",
          roomType: "private_single",
          message: "",
        });
        closeBookingModal();
        toast.success("Thanks! We received your booking request.");
      } else {
        toast.error("Failed to send booking request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleGalleryClick = (src) => {
    openGalleryModal(src);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header currentPage="home" />

      <main>
        {/* Hero */}
        <section id="home" className="hero-bg min-h-[60vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="max-w-3xl text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-left">
                Connect. Co-Live. Grow. Spitiwilly Co.Living.
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/90 text-left">
                A premium, youthful coliving community in Thiruvannur, Calicut —
                private rooms, fast Wi‑Fi, coworking and evenings that build
                networks.
              </p>
              <p className="mt-4 text-white/80 text-left">
                Evenings dedicated to stranger travel tales, career experience
                sharing, and network growth — our calendar is designed to help
                you meet, learn and grow.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-start">
                <Link
                  to="/contact"
                  className="bg-primary text-black px-4 py-2 rounded-md font-medium text-center"
                >
                  Book Your Stay
                </Link>
                <Link
                  to="/community"
                  className="border border-white/70 text-white px-4 py-2 rounded-md text-center"
                >
                  Community Events
                </Link>
              </div>
              <div className="mt-6 text-sm text-white/80 text-left">
                Monthly stays · Short-term stays · Community events
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-left">About Spitiwilly</h2>
              <p className="mt-4 text-gray-300 text-left">
                Nestled in Thiruvannur, Calicut, Spitiwilly Co.Living offers
                affordable private rooms and shared community spaces designed
                for professionals, students and digital nomads. We blend comfort
                with convenience — fully furnished rooms, high-speed internet,
                house events, and a neighborhood feel.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300 text-left">
                <li className="text-left">
                  • 24/7 high-speed Wi‑Fi and quiet coworking areas
                </li>
                <li className="text-left">
                  • Weekly community dinners and skill-shares
                </li>
                <li className="text-left">
                  • Easy access to local markets and transport
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={community1}
                alt="Cozy coliving"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Rooms */}
        {/* <section id="rooms" className="bg-gray-50 py-10 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h3 className="text-2xl font-bold text-left">Rooms & Pricing</h3>
              <Link
                to="/contact"
                className="text-primary hover:underline text-left md:text-right"
              >
                View availability
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-white rounded-lg p-4 shadow text-left">
                <img
                  src="../assets/room3.svg"
                  alt="Shared bunk"
                  className="w-full h-40 object-cover rounded"
                />
                <h4 className="mt-3 font-semibold text-left">
                  Shared Room Without Food
                </h4>
                <p className="text-sm text-gray-600 mt-1 text-left">
                  Budget-friendly bunks in a shared environment with lockers.
                </p>
                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="text-lg font-bold text-left">₹3,500 / mo</div>
                  <Link
                    to="/contact"
                    className="text-primary hover:underline text-left"
                  >
                    Enquire
                  </Link>
                </div>
              </article>
              <article className="bg-white rounded-lg p-4 shadow text-left">
                <img
                  src="../assets/room3.svg"
                  alt="Shared bunk"
                  className="w-full h-40 object-cover rounded"
                />
                <h4 className="mt-3 font-semibold text-left">
                  Shared Room With Food
                </h4>
                <p className="text-sm text-gray-600 mt-1 text-left">
                  Budget-friendly bunks in a shared environment with lockers.
                </p>
                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="text-lg font-bold text-left">₹6,500 / mo</div>
                  <Link
                    to="/contact"
                    className="text-primary hover:underline text-left"
                  >
                    Enquire
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section> */}

        {/* Amenities */}
        <section
          id="amenities"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12"
        >
          <h3 className="text-2xl font-bold text-left">Amenities</h3>
          <div className="mt-6 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="p-4 bg-gray-600 rounded shadow flex flex-col items-center">
              <FaWifi />
              <div className="text-sm mt-2">High-speed Wi‑Fi</div>
            </div>
            <div className="p-4 bg-gray-600 rounded shadow flex flex-col items-center">
              <LuWashingMachine />

              <div className="text-sm mt-2">Laundry</div>
            </div>
            <div className="p-4 bg-gray-600 rounded shadow flex flex-col items-center">
              <TbToolsKitchen3 />

              <div className="text-sm mt-2">Shared Kitchen</div>
            </div>
            <div className="p-4 bg-gray-600 rounded shadow flex flex-col items-center">
              <FaLaptopCode />
              <div className="text-sm mt-2">Co-working</div>
            </div>
            <div className="p-4 bg-gray-600 rounded shadow flex flex-col items-center">
              <FaLock />
              <div className="text-sm mt-2">Lockers</div>
            </div>
            <div className="p-4 bg-gray-600 rounded shadow flex flex-col items-center">
              <MdGroups />
              <div className="text-sm mt-2">Community Lounge</div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-gray-200 py-10 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl text-gray-900 font-bold text-left">
              Gallery
            </h3>
            <p className="text-gray-800 mt-2 text-left">
              A quick peek at community spaces and rooms.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                className="cursor-pointer  rounded-lg object-cover h-40 w-full gallery-item"
                src={gallery1}
                alt="img1"
                onClick={() => handleGalleryClick(gallery1)}
              />
              <img
                className="cursor-pointer rounded-lg object-cover h-40 w-full gallery-item"
                src={gallery2}
                alt="img2"
                onClick={() => handleGalleryClick(gallery2)}
              />
              <img
                className="cursor-pointer rounded-lg object-cover h-40 w-full gallery-item"
                src={gallery3}
                alt="img3"
                onClick={() => handleGalleryClick(gallery3)}
              />
            </div>
          </div>
        </section>

        {/* Location */}
        <section
          id="location"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12"
        >
          <h3 className="text-2xl font-bold text-left">Location</h3>
          <p className="text-gray-600 mt-2 text-left">
            Thiruvannur, Calicut — close to local markets and transport links.
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
        </section>

        {/* Contact */}
        <section id="contact" className="bg-gray-200 py-10 sm:py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl text-gray-900 font-bold text-left">
              Contact, Enquiries & Booking
            </h3>
            <p className="text-gray-800 mt-2 text-left">
              Send us a message, request availability, or make a booking
              enquiry. We reply within 24 hours.
            </p>

            <form
              id="contact-form"
              className="mt-6 grid grid-cols-1 gap-4 w-full text-left"
              onSubmit={handleContactSubmit}
            >
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="border rounded px-3 py-2 text-left text-gray-900"
                value={contactData.name}
                onChange={handleContactChange}
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="border rounded px-3 py-2 text-left text-gray-900"
                value={contactData.email}
                onChange={handleContactChange}
              />
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone (optional)"
                className="border rounded px-3 py-2 text-left text-gray-900"
                value={contactData.phone}
                onChange={handleContactChange}
              />

              <label className="text-sm text-gray-600 text-left">Purpose</label>
              <select
                id="purpose"
                name="purpose"
                className="border rounded px-3 py-2 text-left text-gray-900"
                value={contactData.purpose}
                onChange={handlePurposeChange}
              >
                <option className="text-gray-600" value="enquiry">
                  General enquiry
                </option>
                <option className="text-gray-600" value="booking">
                  Booking request
                </option>
                <option className="text-gray-600" value="other">
                  Other
                </option>
              </select>

              {showBookingFields && (
                <div
                  id="booking-fields"
                  className="grid grid-cols-1 gap-3 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      id="checkin"
                      name="checkin"
                      type="date"
                      className="border rounded px-3 py-2 text-left text-gray-900"
                      value={contactData.checkin}
                      onChange={handleContactChange}
                    />
                    <input
                      id="checkout"
                      name="checkout"
                      type="date"
                      className="border rounded px-3 py-2 text-left text-gray-900"
                      value={contactData.checkout}
                      onChange={handleContactChange}
                    />
                  </div>
                  <select
                    id="room-type"
                    name="room_type"
                    className="border rounded px-3 py-2 text-left text-gray-900"
                    value={contactData.room_type}
                    onChange={handleContactChange}
                  >
                    <option value="private_single">Private Single</option>
                    <option value="deluxe_private">Deluxe Private</option>
                    <option value="shared_bunk">Shared Bunk</option>
                  </select>
                </div>
              )}

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message / special requests"
                className="border rounded px-3 py-2 text-left text-gray-900"
                value={contactData.message}
                onChange={handleContactChange}
              ></textarea>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button
                  type="submit"
                  className="bg-primary cursor-pointer text-white px-4 py-2 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {/* <button
                  id="book-open"
                  type="button"
                  className="bg-white cursor-pointer text-primary px-4 py-2 rounded"
                  onClick={openBookingModal}
                >
                  Quick Book
                </button> */}
              </div>
            </form>
          </div>
        </section>

        {/* Booking modal (quick booking) */}
        <div
          id="booking-modal"
          className={`fixed inset-0 bg-black/70 z-50 items-center justify-center p-4 ${
            isBookingModalOpen ? "flex" : "hidden"
          }`}
        >
          <div className="bg-white rounded-lg max-w-md w-full p-4 sm:p-6">
            <button
              id="booking-close"
              className="float-right text-gray-600"
              onClick={closeBookingModal}
            >
              ✕
            </button>
            <h4 className="text-lg font-bold mt-2 text-left">Quick Booking</h4>
            <p className="text-sm text-gray-600 text-left">
              Fill these details and we'll get back with availability.
            </p>
            <form
              id="booking-form"
              className="mt-4 grid grid-cols-1 gap-3 w-full text-left"
              onSubmit={handleBookingSubmit}
            >
              <input
                name="bk_name"
                type="text"
                placeholder="Full name"
                className="border rounded px-3 py-2 text-left"
                value={bookingData.name}
                onChange={handleBookingChange}
                required
              />
              <input
                name="bk_email"
                type="email"
                placeholder="Email"
                className="border rounded px-3 py-2 text-left"
                value={bookingData.email}
                onChange={handleBookingChange}
                required
              />
              <input
                name="bk_phone"
                type="tel"
                placeholder="Phone"
                className="border rounded px-3 py-2 text-left"
                value={bookingData.phone}
                onChange={handleBookingChange}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="bk_checkin"
                  type="date"
                  className="border rounded px-3 py-2 text-left"
                  value={bookingData.checkin}
                  onChange={handleBookingChange}
                />
                <input
                  name="bk_checkout"
                  type="date"
                  className="border rounded px-3 py-2 text-left"
                  value={bookingData.checkout}
                  onChange={handleBookingChange}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Requesting..." : "Request Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Book CTA */}
        <section id="book" className="bg-primary text-white py-10 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-xl font-bold text-left">
                Ready to join the community?
              </h4>
              <p className="mt-1 text-white/90 text-left">
                Short-term and monthly stays available. Reach out and we'll
                assist with availability.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-2 md:mt-0 bg-white text-primary px-4 py-2 rounded text-center"
            >
              Enquire Now
            </Link>
          </div>
        </section>
      </main>

      {/* Gallery modal */}
      <div
        id="gallery-modal"
        className={`fixed inset-0 bg-black/90 z-50 items-center justify-center p-4 ${
          isGalleryModalOpen ? "flex" : "hidden"
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
      </div>

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

export default Home;
