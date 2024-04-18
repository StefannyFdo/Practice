import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';


export default function BookList() {

    const Book = (props) => (
        <tr className="d-flex">
          <td className="col-5">{props.title}</td>
          <td className="col-5">{props.author}</td>
          <td className="col-5">{props.description}</td>
          <td className="col-2" style={{ textAlign: 'right' }}>
            <button
              onClick={() => {
                props.editBook(props.keyt);
              }}
            >
              Edit
            </button>
            {'  '}
            <button
              onClick={() => {
                props.deleteBook(props.keyt);
              }}
            >
              delete
            </button>
          </td>
        </tr>
      );


    const [books, setBookList] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:5000/book/')
        .then((response) => {
          console.log(response.data);
          setBookList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const deleteBook = (id) => {
      axios
        .delete('http://localhost:5000/book/delete/' + id)
        .then((response) => {
          console.log(response.data);
        });
  
      setBookList(books.filter((el) => el._id !== id));
    };
  
    const editBook = (id) => {
      window.location = '/update/' + id;
    };
  
    return (
      <div>
        <Navbar />
  
        <h3>List of Books</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
         
            {books.map((book) => {
              return (
                <Book
                  title={book.title}
                  author = {book.author}
                  description = {book.description}
                  key={book._id}
                  keyt={book._id}
                  deleteBook={deleteBook}
                  editBook={editBook}
                />
              );
            })}
           
          </tbody>
        </table>
      </div>
    );
  }
  