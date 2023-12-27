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

const handleUpdateBook = (id, params, successCallback) => {
  console.log("handleUpdateBook", params);
  axios.patch(`http://localhost:3000/books/${id}.json`, params).then((response) => {
    setBooks(
      books.map((book) => {
        if (book.id === response.data.id) {
          return response.data;
        } else {
          return book;
        }
      })
    );
    successCallback();
    handleClose();
  })
}

const handleClose = () => {
  console.log("handleClose");
  setIsBooksShowVisible(false);
};

const handleDestroyBook = (book) => {
  console.log("handleDestroyBook", book);
  axios.delete(`http://localhost:3000/books/${book.id}.json`).then((response) => {
    setBooks(books.filter((b) => b.id !== book.id));
    handleClose();
  });
};

useEffect(handleIndexBooks, [])

  return (
    <main>
      <h1>Welcome to Reactssss!</h1>
      <BooksNew onCreateBook={handleCreateBook} />
      <BooksIndex books={books} onShowBook={handleShowBook} />
      <Modal show={isBooksShowVisible} onClose={handleClose}>
        <BooksShow book={currentBook} onUpdateBook={handleUpdateBook} onDestroyBook={handleDestroyBook} />
      </Modal>
    </main>
  )
}
