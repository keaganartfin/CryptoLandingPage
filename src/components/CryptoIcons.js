import React from "react";
import etherium from "../assets/img/etherium.png";
import bitcoin from "../assets/img/bitcoin.png";
import usdc from "../assets/img/usdc.png";
import tether from "../assets/img/tether.png";
import binance from "../assets/img/binance.png";

const CryptoIcons = () => {
  return (
    <>
      <div className="invisible md:visible">
        <div className="md:absolute w-11 md:inset-y-1/3 md:right-64 origin-center rotate-45">
          <div className="absolute w-11 invert blur-[2px]">
            <img src={etherium} alt="etherium icon" />
          </div>
          <div className="absolute w-11 invert blur-lg">
            <img src={etherium} alt="etherium icon" />
          </div>
        </div>
        <div className="md:absolute w-7 md:inset-y-2/3 md:left-96 origin-center -rotate-45 invert">
          <div className="absolute w-7">
            <img src={etherium} alt="etherium icon" />
          </div>
          <div className="absolute w-7 blur-lg">
            <img src={etherium} alt="etherium icon" />
          </div>
        </div>
        <div className="md:absolute w-14 md:inset-y-2/4 md:left-36 origin-center -rotate-45">
          <div className="absolute w-14 blur-[2px]">
            <img src={bitcoin} alt="bitcoin icon" />
          </div>
          <div className="absolute w-14 blur-lg">
            <img src={bitcoin} alt="bitcoin icon" />
          </div>
        </div>
        <div className="md:absolute w-10 md:top-64 md:right-80 origin-center rotate-45">
          <div className="absolute w-10">
            <img src={bitcoin} alt="bitcoin icon" />
          </div>
          <div className="absolute w-10 blur-lg">
            <img src={bitcoin} alt="bitcoin icon" />
          </div>
        </div>
        <div className="md:absolute w-7 md:inset-y-2/3 md:right-96">
          <div className="absolute w-7">
            <img src={binance} alt="binance icon" />
          </div>
          <div className="absolute w-7 blur-lg">
            <img src={binance} alt="binance icon" />
          </div>
        </div>
        <div className="md:absolute w-8 md:top-96 md:left-96 origin-center -rotate-45">
          <div className="absolute w-8 blur-[1px]">
            <img src={binance} alt="binance icon" />
          </div>
          <div className="absolute w-8 blur-lg">
            <img src={binance} alt="binance icon" />
          </div>
        </div>
        <div className="md:absolute w-10 md:bottom-36 md:right-36 origin-center rotate-45">
          <div className="absolute w-10 blur-[1px]">
            <img src={usdc} alt="usdc icon" />
          </div>
          <div className="absolute w-10 blur-lg">
            <img src={usdc} alt="usdc icon" />
          </div>
        </div>
        <div className="md:absolute w-10 md:top-80 md:left-48">
          <div className="absolute w-10">
            <img src={tether} alt="tether icon" />
          </div>
          <div className="absolute w-10 blur-lg">
            <img src={tether} alt="tether icon" />
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden">
        <div className="flex justify-around">
          <div>
            <img className="h-10 invert" src={etherium} alt="" />
          </div>
          <div>
            <img className="w-10" src={bitcoin} alt="" />
          </div>
          <div>
            <img className="w-10" src={usdc} alt="" />
          </div>
          <div>
            <img className="w-10" src={tether} alt="" />
          </div>
          <div>
            <img className="w-10" src={binance} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoIcons;
