import axios from "axios";
import { useState, useEffect } from "react";
import { BooksIndex } from "./BooksIndex";
import { BooksNew } from "./BooksNew";

export function Content() {

const [books, setBooks] = useState([]);

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

useEffect(handleIndexBooks, [])

  return (
    <main>
      <h1>Welcome to Reactssss!</h1>
      <BooksNew onCreateBook={handleCreateBook} />
      <BooksIndex books={books}/>
    </main>
  )
}
