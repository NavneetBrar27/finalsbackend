const express = require('express');
const router = express.Router();

let Book = require('../model/bookmodel');


//get books
router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//add book

// Routes/routes.js
router.post('/add', async (req, res) => {
    const { bookTitle, bookAuthor, description } = req.body;
  
    const newBook = new Book({
      bookTitle,
      bookAuthor,
      description
    });
  
    try {
      await newBook.save();
      res.json('Book added!');
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  });
  
  

//get by id
router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//delete book

router.route('/delete/:id').delete(async (req, res) => {
  console.log('delete logged');
await Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('book deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});


//update book
// Routes/routes.js
router.route('/update/:id').post(async (req, res) => {
    const { bookTitle, bookAuthor, description } = req.body;
  
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json('Book not found');
  
      book.bookTitle = bookTitle;
      book.bookAuthor = bookAuthor;
      book.description = description;
  
      await book.save();
      res.json('Book updated!');
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  });
  module.exports = router;
  