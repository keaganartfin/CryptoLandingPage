import React from "react";
import CryptoIcons from "./CryptoIcons";

const HeroSection = () => {
  return (
    <div className="fixed sm:top-0 w-full">
      <section className="flex items-center justify-center sm:h-screen">
        <div className="text-center sm:w-9/12">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-normal text-gray-300">
              World Class <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Crypto Trading
              </span>{" "}
              Platform
            </h1>
          </div>
          <div className="mt-10 mb-6 sm:mt-16 sm:mb-10 text-gray-400 font-semibold">
            <p className="w-9/12 sm:w-2/5 mx-auto text-sm">
              Say Goodbye To Traditional Finance And Embrace The Future Of Money
              With Our Innovative Cryptocurrency Platform. Be The Hero Of Your
              Financial Journey Today!
            </p>
          </div>
          <div>
            <button className="bg-gradient-to-r from-indigo-700 to-purple-700 px-12 py-3 rounded-2xl text-sm">
              Start Trading
            </button>
          </div>
          
        </div>
      </section>
      <div className="m-5  sm:mt-0">
        <CryptoIcons />
      </div>
    </div>
  );
};

export default HeroSection;
