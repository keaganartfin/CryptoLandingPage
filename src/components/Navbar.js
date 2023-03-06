import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative px-2 py-3 mb-3 z-10">
        <div className=" px-4 mx-auto flex flex-wrap items-center justify-between md:flex-grow">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase shrink text-gray-300 "
              href="/"
            >
              CR
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex items-center" + (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col grow lg:flex-row list-none lg:mx-auto lg:ml-auto">
              <li className="nav-item">
                <a
                  className="py-2 flex items-center text-xs uppercase font-bold mx-6 underline decoration-purple-700 decoration-2 underline-offset-8 text-gray-300 "
                  href="/"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex items-center text-xs uppercase font-bold mx-6 hover:underline decoration-purple-700 decoration-2 underline-offset-8 text-gray-300 "
                  href="/"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Features</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex items-center text-xs uppercase font-bold mx-6 hover:underline decoration-purple-700 decoration-2 underline-offset-8 text-gray-300 "
                  href="/"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Earn</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="py-2 flex items-center text-xs uppercase font-bold mx-6 hover:underline decoration-purple-700 decoration-2 underline-offset-8 text-gray-300 "
                  href="/"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Trade</span>
                </a>
              </li>
              <li className="w-screen sm:hidden sm:w-auto px-5 sm:px-auto">
                <button className="w-full sm:w-auto my-4 text-sm rounded-2xl px-2 sm:px-12 py-3 bg-gradient-to-r from-indigo-700 to-purple-700">
                  Connect Wallet
                </button>
              </li>
            </ul>
          </div>
          <button className="hidden sm:flex sm:w-auto my-4 text-sm rounded-2xl px-2 sm:px-12 py-3 bg-gradient-to-r from-indigo-700 to-purple-700">
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
