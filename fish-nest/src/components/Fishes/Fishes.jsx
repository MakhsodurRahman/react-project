
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Fish from "../Products/Fish/Fish";

const Fishes = ({fishData,fishCategory}) => {
    


     // ✅ Check if fishData is undefined before accessing 'categories'
     if (!fishData || !fishData.categories) {
        return <p className="text-red-500">Loading fish data...</p>;
    }

    const categoryWiseFishData = fishData.categories.find(cat => cat.category === fishCategory);

    console.log('============= : ',categoryWiseFishData.fish)
    
    return (
        <div>
            {
                categoryWiseFishData.fish.map(fish => <Fish key={fish.fish_id} fish={fish}></Fish>)
            }
        </div>
    );
};

export default Fishes;