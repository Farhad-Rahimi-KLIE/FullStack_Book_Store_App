const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    file : String,
    title : String,
    price : String
});
const BookModel = mongoose.model('books', BookSchema);
module.exports = BookModel;