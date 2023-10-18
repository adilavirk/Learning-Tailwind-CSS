import React from "react";
import certificate from "/certificate.svg";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white pt-8 px-4 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
      <div>
        <img
          className="w-40 h-16"
          src="https://pwskills.com/images/PWSkills-white.png"
          alt=""
        />
        <p>Email us: support@pwskills.com</p>
        <img className="w-32 h-32 rounded-full" src={certificate} alt="" />
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4">PW Skills</h2>
        <div className="border-2 border-yellow-500 rounded-2xl my-2 w-32 h-1"></div>
        <div>
          <p>About us</p>
          <p>FAQ</p>
          <p>Privacy policy</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4">Products</h2>
        <div className="border-2 border-yellow-500 rounded-2xl my-2 w-32 h-1"></div>
        <div>
          <p>PW Skills Lab</p>
          <p>Job Portal</p>
          <p>Experience Portal</p>
          <p>Become an affiliate</p>
          <p>Hall Of fame</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4">Links</h2>
        <div className="border-2 border-yellow-500 rounded-2xl my-2 w-32 h-1"></div>
        <div>
          <p>Discord Channel</p>
          <p>PW Youtube</p>
          <p>Careers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
