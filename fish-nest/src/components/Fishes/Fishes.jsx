
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Fish from "../Products/Fish/Fish";

const Fishes = ({displayFishes}) => {
    


     // ✅ Check if fishData is undefined before accessing 'categories'
     if (!displayFishes || !displayFishes) {
        return <p className="text-red-500">Loading fish data...</p>;
    }

    //const categoryWiseFishData = fishData.categories.find(cat => cat.category === fishCategory);

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl">
            {
                displayFishes.map(fish => <Fish key={fish.fish_id} singleFish={fish}></Fish>)
            }
        </div>
    );
};

export default Fishes;