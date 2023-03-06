import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-5 w-screen text-center">
      <div className="mt-12">
        <p className="text-xs md:text-base font-semibold">
          Made with &#10084; by{" "}
          <a
            className="text-purple-400"
            href="https://www.linkedin.com/in/keagan-latarewicz/"
            target="_blank"
            rel="noreferrer"
          >
            Keagan Latarewicz
          </a>
          <br />{" "}
          <a
            className="text-indigo-400"
            href="https://github.com/keaganartfin/CryptoLandingPage"
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>{" "}
          can be found here <br /> Original Mockup from{" "}
          <a
            className="text-indigo-400"
            href="https://dribbble.com/shots/20827373-Crypto-Trading-Blockchain-Landing-Page"
            target="_blank"
            rel="noreferrer"
          >
            Dribble
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
