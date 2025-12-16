import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-5 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="../assets/co.living logo.jpg"
            alt="Spitiwilly logo"
            className="h-8 w-8 object-contain rounded-md"
            onError={(e) => (e.target.style.display = "none")}
          />
          <div>
            <div className="font-semibold">Spitiwilly Co.Living</div>
            <div className="text-sm text-gray-400">Thiruvannur, Calicut</div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          © 2025 Spitiwilly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
