"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import Hero from "./Hero";
import Intro from "./Intro";
import Resturant from "./Resturant";
import Kitchen from "./Kitchen";
import Events from "./Events";
import Footer from "./Footer";
import Mapbox from "./Mapbox";
//import Buttons from "./Buttons";
//import Navbar from "./Navbar";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative">
          <Hero />
          <Intro />
          <Resturant />
          <Kitchen />
          <Mapbox />
          <Footer />
          {/*<div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
            <Buttons />
          </div>*/}
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-primary">
          <BounceLoader color="#d7b072" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
