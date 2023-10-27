import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className=" bg-teal-700 text-white text-xl">
      <section className="max-w-4xl flex flex-col sm:flex-row mx-auto p-4 sm:justify-between widescreen:section-min-height tallscreen:section-min-height ">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          555 Astro Way <br />
          Fairfield, New Jersey 12345-5555
          <br />
          Email:<a href="Inquires@AcmeRockets.com">Inquires@AcmeRockets.com</a>
          Phone: <a href=" (555) 555-5555"> (555) 555-5555</a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
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
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2022</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
