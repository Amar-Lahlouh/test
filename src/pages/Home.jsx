import React from "react";
import { Navbar } from "../components";
import Landing from "../components/Landing";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Gallery />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
