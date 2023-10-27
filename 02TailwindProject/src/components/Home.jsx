import React from "react";
import Header from "./Header";
import Main from "./Main";
import Rockets from "./Rockets";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <Main />
      <Rockets />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
