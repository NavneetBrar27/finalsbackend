// model/bookmodel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookTitle: { type: String, required: true },
  bookAuthor: { type: String, required: true },
  description: { type: String }
},{ collection: '300377526-Navneet' });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
