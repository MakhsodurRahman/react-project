import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("../../../public/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
        <div>
            <h2 className="text-4xl text-center font-bold mt-5 mb-5">Books</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
            books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
            ))}
      </div>
    </div>
  );
};

export default Books;
