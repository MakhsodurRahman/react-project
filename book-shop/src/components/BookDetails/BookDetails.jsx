import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList, addToStoreWishList } from "../../utility/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === parseInt(bookId));

  const { bookId: currentBookId, image } = book;

  const handleMarkAsRead = (id)=>{
    addToStoreReadList(id);
  }

  const handleWishList = (id) =>{
    addToStoreWishList(id);
  }

  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center border-2">
      <img src={image} alt="Book Item" className="w-40" />
      </div>
      <div className="text-center">
        <button onClick={()=> handleMarkAsRead(currentBookId)} className="btn btn-outline">Mark as read</button>
        <button onClick={()=> handleWishList(currentBookId)} className="btn btn-accent">Add to wish list</button>
      </div>
    </div>
  );
};

export default BookDetails;
