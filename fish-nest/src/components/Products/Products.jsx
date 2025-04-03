import { useContext, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Fish from "./Fish/Fish";
import Fishes from "../Fishes/Fishes";
import { Outlet, useLoaderData, useLocation, useParams } from "react-router-dom";
import FishesContextApi from "../../ContextApi/FishesContextApi";
import CategoryParam from "../../ContextApi/CategoryParam";

const Products = () => {

  const currentURL = useLocation().pathname;
  const fishData = useContext(FishesContextApi);
  const {fishCategory} = useParams();
  const [displayFishes,setDisplayFishes] = useState([]);
  const filterFishes = useLoaderData();

  console.log(fishData)
  console.log('++++++++++++ : ',fishCategory)


  useEffect(()=> {
    if(currentURL === '/'){
      let allFishes = [];

      for (let i = 0; i < fishData.categories.length; i++) {
          allFishes = [...allFishes, ...fishData.categories[i].fish]; 
      }
  
      setDisplayFishes(allFishes);
     
    }else{
      setDisplayFishes(filterFishes[0].fish);
    }
  },[currentURL,filterFishes,fishData])

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="mt-10 mb-6 text-4xl font-bold text-gray-700 text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex flex-row ml-10">
        <div className="w-1/6">
          <SideBar
          ></SideBar>
        </div>
        <div className="w-5/6">
            <CategoryParam.Provider value={fishCategory}>
              <Fishes displayFishes={displayFishes} fishCategory={fishCategory}></Fishes>
            </CategoryParam.Provider>
        </div>
      </div>
    </div>
  );
};

export default Products;
