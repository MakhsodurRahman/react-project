import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";

const Player = ({player,handleSelectedPlayer}) => {
    const {name,image_url,country,role,rating,price} = player;
    // console.log(player)
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-2xl p-5 mt-3'">
        <img src={image_url}
        className="rounded-2xl w-full"
        />
        <div className="flex items-center space-x-1 mt-3 font-bold">
            <p><CgProfile></CgProfile></p>
            <h3>{name}</h3>
        </div>

        <div className="mt-4 flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
                <h3><FaFlag></FaFlag></h3>
                <span>{country}</span>
            </div>
            <div>
                <p className="rounded-2xl bg-gray-100 pl-3 pr-3 pb-2 pt-2">{role}</p>
            </div>
        </div>
        <hr/>
        <h3 className="font-bold mt-4">Rating</h3>
        <div className="flex justify-between items-center">
            <h3 className="font-bold">{rating}</h3>
            <p>{rating}</p>
        </div>

        <div className="mt-4 flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
                <h2 className="font-bold">${price}</h2>
            </div>
            <div>
                <button onClick={() => handleSelectedPlayer(player)} className="border-2 border-gray-100 rounded-2xl pl-3 pr-3 pb-2 pt-2">Choose Player</button>
            </div>
        </div>
    </div>
  );
};

export default Player;
