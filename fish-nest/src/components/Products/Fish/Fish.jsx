const Fish = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm p-3 bg-white ml-5">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="mt-4">
          <h2 className="text-black font-bold pb-1">
            Card Title
          </h2>
          <h4 className="text-gray-600 font-bold pb-1">Price : </h4>
          <div className="card-actions">
          <button className="btn btn-outline btn-primary text-blue-500">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fish;
