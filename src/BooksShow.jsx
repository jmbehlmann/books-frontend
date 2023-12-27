export function BooksShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateBook(props.book.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Book Info</h1>
      <p>Title: {props.book.title}</p>
      <p>Author: {props.book.author}</p>
      <p>Pages: {props.book.pages}</p>
      <p>{props.book.id}</p>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input defaultValue={props.book.title} name="title" type="text" />
          </div>
          <div>
            Author: <input defaultValue={props.book.author} name="author" type="text" />
          </div>
          <div>
            Pages: <input defaultValue={props.book.pages} name="pages" type="text" />
          </div>
          <button type="submit">Update Book</button>
        </form>
    </div>
  );
}
