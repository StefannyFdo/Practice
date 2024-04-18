import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';


export default function CreateBook(){

    const [title, setOnChangeTitle] = useState(``);
    const [author, setOnChangeAuthor] = useState(``);
    const [description, setOnChangeDecription] = useState(``);
    

  const onSubmit = (e) => {
    e.preventDefault();
    const newBook = { title: title,
    author : author,
    description: description };

    axios
      .post('http://localhost:5000/book/add', newBook)
      .then((res) => {
        window.location = '/';
      });
  };
    return(
        <div onSubmit={onSubmit}>
            <Navbar />
            <h3>Add a book</h3>
      <form>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            required
            className="form-control"
            value={title}
            onChange={(e) => setOnChangeTitle(e.target.value)}
          />
          <label>Author: </label>
          <input
            type="text"
            required
            className="form-control"
            value={author}
            onChange={(e) => setOnChangeAuthor(e.target.value)}
          />
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setOnChangeDecription(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Add Book"
            className="btn btn-primary"
          />
        </div>
      </form>
        </div>
    );
}