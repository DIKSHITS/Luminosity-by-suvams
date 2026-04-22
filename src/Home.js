import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EditorialSection from "./components/EditorialSection";
import LoveStories from "./components/LoveStories";
import Portfolio from "./components/Portfolio";
import Feedback from "./components/Feedback";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <EditorialSection />
      <LoveStories />
      <Portfolio />
      <Feedback />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Home;