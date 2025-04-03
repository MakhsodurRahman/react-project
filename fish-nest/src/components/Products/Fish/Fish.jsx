import { useContext } from "react";
import { NavLink } from "react-router-dom";
import categoryParam from "../../../ContextApi/CategoryParam";

const Fish = ({singleFish}) => {


  const categoryName = useContext(categoryParam);
  console.log(' name ',categoryName)
  const { fish_id, fish_name, fish_image, price, description, details } = singleFish;

  return (
    <div>
      <div className="card bg-base-100 w-45 shadow-sm p-2 bg-white ml-5">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="mt-4">
          <h2 className="text-black font-bold pb-1">
            {fish_name}
          </h2>
          <h4 className="text-gray-600 font-bold pb-1">Price : {price}</h4>
          <div className="card-actions">
          <NavLink to={`${fish_id}`} className="btn btn-outline btn-primary text-blue-500">View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fish;
