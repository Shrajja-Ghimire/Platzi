import React from "react";
import { Link } from "react-router";
import girl from "../../assets/girl.png";
import "flowbite";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router";
//second
const HeroSection = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handlelogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <>
      <div className="p-5">
        <p className="font-bold text-amber-900">
          Welcome-- {userName.username}
        </p>
        <button
          onClick={handlelogout}
          className=" w-20 h-8 border border-amber-600 rounded-2xl hover:bg-amber-700 hover:text-white active:bg-amber-900 sm:m-auto"
        >
          Logout
        </button>
      </div>
      <div className=" flex  flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 md:text-left space-y-4">
          <h1 className="text-3xl text-center md:text-5xl font-bold text-gray-900">
            "Shop More, Save More."
          </h1>
          <div className="mt-20 ml-10">
            <p className="text-gray-600 mt-5 md:text-lg">
              Welcome to Platzi Store, your one-stop destination for the latest
              fashion, electronics, and lifestyle essentials.
            </p>
            <Link to="/product">
              <button className=" active:bg-amber-950 mt-10 flex items-center  gap-5 border-1  border-amber-700 p-4 rounded-lg hover:bg-amber-700  hover:text-white transition">
                Shop Now
                <FaArrowDown className="text-center" />
              </button>
            </Link>
          </div>
        </div>
        <img src={girl} alt="home" />
      </div>
    </>
  );
};

export default HeroSection;
