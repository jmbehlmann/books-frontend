export function BooksShow(props) {
  return (
    <div>
      <h1>Book Info</h1>
      <p>Title: {props.book.title}</p>
      <p>Author: {props.book.author}</p>
      <p>Pages: {props.book.pages}</p>
      <p>{props.book.id}</p>
    </div>
  );
}
