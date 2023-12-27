export function BooksIndex(props) {
  return (
    <div>
      <h1>All Books</h1>
      {props.books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.pages}</p>
          <button onClick={() => props.onShowBook(book)}>More info</button>
        </div>
      ))}
    </div>
  );
}
