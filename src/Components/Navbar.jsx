import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";
const navbarItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center pl-10 pr-16">
        <div className="flex items-center">
          <img src={logo} alt="" className="h-24 mr-10" />
          <div className="flex justify-center items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Your Brand Name ..."
                className="w-72 py-2 px-4 pr-10 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FaSearch className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        <ul className="flex gap-x-8 items-center">
          {navbarItems.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="text-xl font-bold uppercase">
                {item.name}
              </Link>
            </li>
          ))}
          <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
          <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            <FaUser className="mr-2" />
            Login
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
