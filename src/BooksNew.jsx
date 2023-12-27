export function BooksNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateBook(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Create a new book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type = "text" />
        </div>
        <div>
          Author: <input name="author" type = "text" />
        </div>
        <div>
          Pages: <input name="pages" type = "text" />
        </div>
        <button type="submit">Create new book</button>
      </form>
    </div>
  );
}
