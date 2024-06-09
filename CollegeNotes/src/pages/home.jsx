import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-300">
        <Navbar />
      <div className="flex-grow">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
