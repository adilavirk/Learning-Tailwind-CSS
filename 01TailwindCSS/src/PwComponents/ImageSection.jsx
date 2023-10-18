import React from "react";
const heroImage =
  "https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg";
const mobileImage =
  "https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg";
const ImageSection = () => {
  return (
    <>
      <header className="w-full h-autoc">
        <img className="w-full hidden md:block" src={heroImage} alt="" />
        <img
          className="w-full md:hidden flex flex-col-reverse"
          src={mobileImage}
          alt=""
        />
      </header>
    </>
  );
};

export default ImageSection;
