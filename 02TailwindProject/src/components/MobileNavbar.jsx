import React from "react";

const MobileNavbar = () => {
  return (
    <section
      id="mobile-menu"
      className=" md:hidden absolute bg-black w-full text-5xl flex flex-col justify-content-center"
    >
      {/* <button className="text-8xl px-6  self-end">&times;</button> */}
      <nav
        className="flex flex-col min-h-screen py-8 items-center"
        aria-label="mobile"
      >
        <a href="hero" className="text-center hover:opacity-90 w-full py-6">
          Home
        </a>
        <a href="rockets" className="text-center hover:opacity-90 w-full py-6">
          Our Rockets
        </a>
        <a
          href="testimonials"
          className="text-center hover:opacity-90 w-full py-6"
        >
          Testimonials
        </a>
        <a href="contact" className="text-center hover:opacity-90 w-full py-6">
          Contact Us
        </a>
        <a href="footer" className="text-center hover:opacity-90 w-full py-6">
          Legal
        </a>
      </nav>
    </section>
  );
};

export default MobileNavbar;
