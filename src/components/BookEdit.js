import { useState } from "react";

function BookEdit({ book, onSave }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "") {
      return;
    }
    onSave(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" onChange={handleChange} value={title} />
      <button type="submit" className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
