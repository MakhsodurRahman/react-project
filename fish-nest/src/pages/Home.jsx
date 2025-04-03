import React from "react";
import {Categories} from "../assets/mockFish";
import HeroImage from '../assets/image/hero-page.jpg'
import InfoSection from "./InfoSection";
import AquariumFishCategories from "../components/AquariumFishCategories";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-3">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2">
            <h2>SHOP BY CATEGORIES</h2>
          </div>
          <ul className="bg-gray-100 border space-y-4">
            {Categories.map((category, idx) => (
              <li className="flex items-center text-sm font-medium ml-2" key={idx}>{category}</li>
            ))}
          </ul>
        </div>


        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={HeroImage} alt="" className="h-full w-full" />
            <div className="absolute top-16 left-8">
                <p className="text-gray-600 mb-4">Code With Yousaf</p>
                <h2 className="text-3x1 font-bold">WELCOME TO E-SHOP</h2>
                <p className="text-xl mt-2.5 font-bold text-gray-800">MILLIONS+ PRODUCTS</p>
                <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                SHOP NOW
                </button>
            </div>
        </div>
      </div>

      <InfoSection/>
      <AquariumFishCategories/>
    </div>
  );
};

export default Home;
