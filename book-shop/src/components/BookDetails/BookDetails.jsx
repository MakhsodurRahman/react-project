import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === parseInt(bookId));

  const { bookId: currentBookId, image } = book;
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center border-2">
      <img src={image} alt="Book Item" className="w-40" />
      </div>
      <div className="text-center">
        <button className="btn btn-outline">Mark as read</button>
        <button className="btn btn-accent">Add to wish list</button>
      </div>
    </div>
  );
};

export default BookDetails;
