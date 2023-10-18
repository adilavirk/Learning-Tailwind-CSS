import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-6 items-center">
        <div className="text-2xl text-indigo-700 font-bold">PW-Skills</div>
        <ul className="md:flex space-x-3 font-semibold hidden cursor-pointer">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        {/* button */}
        <div className="hidden md:block bg-indigo-700 px-2 py-2 text-white rounded font-bold cursor-pointer">
          Login/Signup
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
