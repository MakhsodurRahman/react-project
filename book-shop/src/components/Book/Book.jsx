import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-3 bg-slate-500">
      <figure className="bg-slate-300 py-8 rounded-lg">
        <img
          src={image}
          className="h-40"
          alt="Book"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h3>{author}</h3>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
