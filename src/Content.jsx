import axios from "axios";
import { useState, useEffect } from "react";
import { BooksIndex } from "./BooksIndex";
import { BooksNew } from "./BooksNew";
import { BooksShow } from "./BooksShow";
import { Modal } from "./Modal";

export function Content() {

const [books, setBooks] = useState([]);
const [isBooksShowVisible, setIsBooksShowVisible] = useState(false);
const [currentBook, setCurrentBook] = useState({});

const handleIndexBooks = () => {
  console.log("handleIndexBooks");
  axios.get("http://localhost:3000/books.json").then((response) => {
    console.log(response.data);
    setBooks(response.data);
  });
};

const handleCreateBook = (params, successCallback) => {
  console.log("handleCreateBook", params);
  axios.post("http://localhost:3000/books.json", params).then((response) => {
    setBooks([...books, response.data]);
    successCallback();
  });
};

const handleShowBook = (book) => {
  console.log("handleShowBook", book);
  setIsBooksShowVisible(true);
  setCurrentBook(book);
};

const handleClose = () => {
  console.log("handleClose");
  setIsBooksShowVisible(false);
};

useEffect(handleIndexBooks, [])

  return (
    <main>
      <h1>Welcome to Reactssss!</h1>
      <BooksNew onCreateBook={handleCreateBook} />
      <BooksIndex books={books} onShowBook={handleShowBook} />
      <Modal show={isBooksShowVisible} onClose={handleClose}>
        <BooksShow book={currentBook} />
      </Modal>
    </main>
  )
}
