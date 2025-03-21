import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from '../Book/Book'

const ListedBook = () => {
    const allBooks = useLoaderData();
    const [readList,setReadList] = useState([]);

    useEffect(()=>{
        const storeResultListInt = getStoredReadList().map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storeResultListInt.includes(book.bookId));
        setReadList(readBookList);
    },[allBooks])

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
