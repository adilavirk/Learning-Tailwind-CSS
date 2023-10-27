import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl p-4 mx-auto items-center flex justify-between ">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀Acme Rockets</a>
        </h1>
        <div>
          {/* button for mobile view navbar */}
          <button
            onClick={toggleNavbar}
            className="text-8xl md:hidden focus:outline-none cursor-pointer"
            id="hamburger-button"
          >
            {isOpen ? <X /> : <Menu />}
            {/* &#9776; */}
          </button>

          {/* Navbar  */}
          <nav className="hidden md:block space-x-8 text-xl" aria-label="#main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>

      {/* Mobile Navbar on the click of hamburger */}
      {isOpen && <MobileNavbar />}
    </header>
  );
};

export default Header;
