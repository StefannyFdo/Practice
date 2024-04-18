const router = require('express').Router();
let Book = require('../models/Book.model');

router.route('/').get((req, res) => {
    Book.find()
      .then((books) => res.json(books))
      .catch((err) => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req,res)=>{

    title = req.body.title;
    author = req.body.author;
    description = req.body.description;

    const newBook = new Book({
        title,
        author,
        description
    });

    newBook.save()
    .then(() => res.json('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));

  });

  module.exports = router;