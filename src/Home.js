import React from "react";
import Navbar from "./components/Navbar";   // ✅ ADD THIS
import Hero from "./components/Hero";       // ✅ ADD THIS
import EditorialSection from "./components/EditorialSection";
import LoveStories from "./components/LoveStories";
import Portfolio from "./components/Portfolio";
import Feedback from "./components/Feedback";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <EditorialSection />
      <LoveStories />
      <Portfolio />   {/* ADD THIS */}
      <Feedback />    {/* ADD THIS */}
      <FAQ />          {/* ADD THIS */}
      <Contact />      {/* ADD THIS */}
      <Footer />   {/* ADD HERE */}
    </>
  );
};

export default Home;