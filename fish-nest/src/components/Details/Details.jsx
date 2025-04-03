import ReactStars from "react-rating-stars-component";
import React, { useContext, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";

import { useLoaderData } from "react-router-dom";
import AddToCard from "../../ContextApi/AddToCard";
import AddToWishList from "../../ContextApi/AddToWishList";
import { addToCartt, addToWishList } from "../Utility/Utility";  // Correct import

const Details = () => {
  const singleFish = useLoaderData();
  const [card, setCard] = useContext(AddToCard);
  const [wishList, setWishList] = useContext(AddToWishList);

  const [disableAddToCartButton, setDisableAddToCartButton] = useState(false);
  const [disableAddToWishlistButton, setDisableAddToWishlistButton] = useState(false);

  // 🛒 Handle Add to Cart
  const handleAddToCard = () => {
    if (card.some(item => item.fish_id === singleFish.fish_id)) {
      alert("This fish is already added.");
    } else {
      setCard([...card, singleFish]);
      addToCartt(singleFish);
      alert("Added to cart successfully.");
      setDisableAddToCartButton(true);
    }
  };

  // ❤️ Handle Add to Wishlist
  const handleAddTowish = () => {
    if (wishList.some(item => item.fish_id === singleFish.fish_id)) {
      alert("Already added to wishlist.");
    } else {
      setWishList([...wishList, singleFish]);
      addToWishList(singleFish);
      alert("Added to wishlist.");
      setDisableAddToWishlistButton(true);
    }
  };

  // 🚀 Update Buttons Based on Cart/Wishlist
  useEffect(() => {
    if (card.some(item => item.fish_id === singleFish.fish_id)) {
      setDisableAddToCartButton(true);
    }
  }, [card, singleFish]);

  useEffect(() => {
    if (wishList.some(item => item.fish_id === singleFish.fish_id)) {
      setDisableAddToWishlistButton(true);
    }
  }, [wishList, singleFish]);

  const { fish_name, fish_image, price, description, details, rating } = singleFish;

  return (
    <div className="w-full">
      <div className="bg-purple-600 h-[300px] pt-3 px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-3xl font-bold mb-1">Fish Details</h1>
          <p className="text-sm md:text-base mx-auto max-w-2xl mb-8">
            Explore the best aquarium fish with premium quality and care.
          </p>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-16 rounded-t-full"></div>
      </div>

      <div className="relative -mt-20 mx-auto max-w-3xl px-4">
        <div className="rounded-3xl overflow-hidden border-4 shadow-lg">
          <div className="bg-white p-0 flex justify-between">
            {/* Fish Image */}
            <div className="w-2/4">
              <img className="p-3 rounded-3xl" src={fish_image} alt={fish_name} />
            </div>

            {/* Fish Details */}
            <div className="text-black w-2/4 p-3">
              <h2 className="text-xl font-semibold">{fish_name}</h2>
              <h2 className="text-lg">Price: ${price}</h2>
              <h2 className="text-gray-700">{description}</h2>

              {/* Fish Additional Details */}
              {details.map((dtl, idx) => (
                <h2 key={idx}>{idx + 1}. {dtl}</h2>
              ))}

              {/* ⭐ Fish Rating */}
              <h3 className="text-xl font-semibold">Rating:</h3>
              <div className="flex justify-center items-center">
                <ReactStars
                  count={5}
                  size={24}
                  value={rating}
                  isHalf={true}
                  edit={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <span className="text-base text-gray-500 font-semibold bg-gray-500/10 ml-2 px-4 py-1 rounded-full">
                  {rating}
                </span>
              </div>

              {/* Buttons: Add to Cart & Wishlist */}
              <div className="flex items-center text-white mt-4">
                <button
                  onClick={handleAddToCard}
                  disabled={disableAddToCartButton}
                  className={`${
                    disableAddToCartButton ? "bg-gray-400 cursor-not-allowed" : "bg-blue-400"
                  } flex justify-center items-center rounded-lg p-2`}>
                  <h4>Add To Cart</h4>
                  <BsCart3 className="text-2xl pl-1 text-white" />
                </button>

                <button
                  onClick={handleAddTowish}
                  disabled={disableAddToWishlistButton}
                  className={`${
                    disableAddToWishlistButton ? "bg-yellow-300 cursor-not-allowed" : "bg-green-200"
                  } border-2 p-2 rounded-xl ml-2`}>
                  <h4 className="text-blue-400"><GiSelfLove /></h4>
                </button>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
