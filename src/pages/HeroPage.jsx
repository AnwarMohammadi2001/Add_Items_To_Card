import React from "react";
import { motion } from "framer-motion";

import heroLogo from "../assets/puma/puma-logo.jpg";

const HeroPage = () => {
  return (
    <div className="min-h-[500px] px-20">
      <div className="grid grid-cols-2 gap-10 ">
        <div className=" flex flex-col items-start justify-center h-[500px] ">
          <h1 className="text-3xl font-bold w-96 tracking-tighter space-y-2">
            Step Into Style with Our{" "}
            <span className="pl-12 pt-5 text-[#f59e0b]">
              {" "}
              Exclusive Shoe Collection
            </span>{" "}
            !
          </h1>
          <p className="my-5 text-lg text-gray-500 text-justify">
            Whether you're searching for the perfect pair of casual sneakers,
            sleek dress shoes, or durable sports footwear, our collection has
            something for every style and occasion. Each pair is crafted with
            quality materials to ensure comfort and durability. From the latest
            trends to timeless classics, step up your shoe game with us.
          </p>
          <button className="primary-btn">Browse Collection !</button>
        </div>
        <div className="flex items-center justify-center ">
          <img src={heroLogo} alt="herologo" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
