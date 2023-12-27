import axios from "axios";
import { useState, useEffect } from "react";
import { BooksIndex } from "./BooksIndex"

export function Content() {

const [books, setBooks] = useState([]);

const handleIndexBooks = () => {
  console.log("handleIndexBooks");
  axios.get("http://localhost:3000/books.json").then((response) => {
    console.log(response.data);
    setBooks(response.data);
  });
};

useEffect(handleIndexBooks, [])

  return (
    <main>
      <h1>Welcome to Reactssss!</h1>
      <BooksIndex books={books}/>
    </main>
  )
}
