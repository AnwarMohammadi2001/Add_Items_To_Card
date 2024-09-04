import React from "react";
import nike1 from "../assets/Nike/nike-w-air.jpg";
import shoes2 from "../assets/adidas/adidas-1.avif";
import puma from "../assets/puma/puma.avif";
import nb from "../assets/Nb/product.jpeg";
import fila from "../assets/fila/fila.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const shoesItems = [
  {
    id: 1,
    name: "Nike Air Zoom",
    lastPrice: 180,
    newPrice: 150,
    color: "Pink",
    img: nike1,
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    lastPrice: 100,
    newPrice: 85,
    color: "black",
    img: shoes2,
  },
  {
    id: 3,
    name: "Puma Free Run",
    lastPrice: 110,
    newPrice: 90,
    color: "white",
    img: puma,
  },
  {
    id: 3,
    name: "New Balance 550",
    lastPrice: 130,
    newPrice: 110,
    color: "Reflection White",
    img: nb,
  },
  {
    id: 4,
    name: "Fila Disruptor ",
    lastPrice: 100.0,
    newPrice: 75.0,
    color: "Red",
    img: fila,
  },
];
const BrandsItems = () => {
  return (
    <div className="px-20">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold mb-6">Buy Now, Wear Tomorrow !</h1>
        <button className="text-blue-500 underline text-xl hover:text-blue-700">
          See All
        </button>
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {shoesItems.map((item) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative border rounded-lg overflow-hidden group"
          >
            <img
              src={item.img}
              className="h-[250px] w-full object-cover"
              alt={item.name}
            />
            <div className="absolute  inset-0 flex flex-col gap-y-7 items-center justify-center bg-gray-500 bg-opacity-70 transition-opacity opacity-0 group-hover:opacity-100">
              <button className="py-2 w-40 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Add to Cart
              </button>
              <Link to="/showdetilas">
                <button className="py-2 w-40 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  Details
                </button>
              </Link>
            </div>
            <div className="p-5">
              <h2 className="font-bold text-xl">{item.name}</h2>
              <h2 className="text-lg font-bold">{item.color}</h2>
              <p className="text-gray-400 hover:text-gray-600">
                <span>{item.newPrice} $</span>{" "}
                <span className="line-through">{item.lastPrice} $</span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsItems;
