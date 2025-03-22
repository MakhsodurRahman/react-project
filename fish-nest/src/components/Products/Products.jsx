import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Fish from "./Fish/Fish";
import Fishes from "../Fishes/Fishes";
import { Outlet, useLoaderData, useParams } from "react-router-dom";

const Products = () => {

  const fishData = useLoaderData();
    const {fishCategory} = useParams();

  return (
    <div>
      <h2 className="mt-10 mb-6 text-4xl font-bold text-gray-700 text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex flex-row ml-10">
        <div className="w-1/6">
          <SideBar
          ></SideBar>
        </div>
        <Outlet></Outlet>
        <div className="w-5/6">
            <Fishes fishCategory={fishCategory} fishData={fishData}></Fishes>
        </div>
      </div>
    </div>
  );
};

export default Products;
