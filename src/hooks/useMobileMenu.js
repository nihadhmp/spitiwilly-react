import { useState, useEffect } from "react";

const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("mobile-menu-btn");

      if (
        menu &&
        menuButton &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return { isMenuOpen, toggleMenu };
};

export default useMobileMenu;
