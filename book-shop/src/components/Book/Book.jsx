import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, image, bookName, author,tags,category,rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm p-3 bg-slate-500">
        <figure className="bg-slate-300 py-8 rounded-lg">
            <img
            src={image}
            className="h-40"
            alt="Book"
            />
        </figure>
        <div className="card-body">
            <div className="flex">
                {
                    tags.map((tag,idx) => <button key={idx} className="btn btn-sm mr-2 bg-slate-500">{tag}</button>)
                }
            </div>
            <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <h3>{author}</h3>
            <div className="border-t-2 border-dotted"></div>
            <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating ">
                <p className="text-white bg-yellow-400 rounded">{rating}</p>
                <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star" defaultChecked />
                <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
                <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
                <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
                </div>
            </div>
        </div>
        </div>
    </Link>
  );
};

export default Book;
