import React from "react";
import Navbar from "./Navbar";
import ImageSection from "./ImageSection";
import Students from "./Students";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageSection />
      <Students />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
