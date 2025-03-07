import React, { useState } from "react";
import { NavLink } from "react-router"; // Fix import for React Router
import logo from "../../assets/logo.png";
import "../../index.css";
import { FaCartPlus } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

//component first
const Navbar = () => {
  const [open, setOpen] = useState(false); //mobile

  const cartLength = useSelector((state) => state.cart.cartItems?.length);

  return (
    <div className="sticky top-0  shadow-md z-50 bg-white p-5 min-h-[50px] max-h-[70px] flex justify-between items-center border-b border-gray-200">
      {/* Logo Section */}
      <div className="ml-10 flex gap-4 w-30 items-center cursor-pointer">
        <img src={logo} alt="logo" className="w-9 h-9" />
        <NavLink to="/" className="text-lg font-extrabold">
          UrbanCart
        </NavLink>
      </div>

      {/* Desktop & Tablet Navigation Menu */}
      <div className="hidden md:flex">
        <ul className="flex gap-15 text-lg">
          <li className="hover:text-amber-600">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-amber-600 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-amber-600">
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "text-amber-600 font-bold" : ""
              }
            >
              Products
            </NavLink>
          </li>
          <li className="hover:text-amber-600">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-amber-600 font-bold" : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Cart and Login Section */}
      <div className="flex items-center mr-10 gap-5">
        <NavLink to="/cart">
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8">
            <FaCartPlus className="w-6 h-6 sm:w-5 sm:h-5" />
            <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-600 text-white text-xs sm:text-[10px] w-5 h-5 sm:w-4 sm:h-4 rounded-full flex justify-center items-center">
              {cartLength}
            </span>
          </div>
        </NavLink>

        <NavLink to="/register">
          <FaUser />
        </NavLink>
      </div>

      {/* Mobile Menu Button (Now works for tablets too) */}
      <div className="lg:hidden" onClick={() => setOpen(!open)}>
        <MdMenu className="text-2xl cursor-pointer" />
      </div>

      {/* Mobile & Tablet Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col items-center md:hidden">
          <NavLink to="/hero" className="py-2" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/product"
            className="py-2"
            onClick={() => setOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
