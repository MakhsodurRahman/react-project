import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import FishesContextApi from "../../ContextApi/FishesContextApi";
import AddToCard from '../../ContextApi/AddToCard'
import { useState } from "react";
import AddToWishList from "../../ContextApi/AddToWishList";

const Root = () => {
  const fishes = useLoaderData();

  const [card,setCard] = useState([]);
  const [wishList,setWishList] = useState([]);

  return (
    <>
      <FishesContextApi.Provider value={fishes}>
        <AddToCard.Provider value={[card,setCard]}>
          <AddToWishList.Provider value={[wishList,setWishList]}>
            <div className="max-w-6xl mx-auto bg-gray-100">
              <Navbar></Navbar>
              <Outlet></Outlet>
              <Footer></Footer>
            </div>
          </AddToWishList.Provider>
        </AddToCard.Provider>
      </FishesContextApi.Provider>
    </>
  );
};

export default Root;
