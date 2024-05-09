const Book = require('../Models/books')

const getBooks = (req, res)=>{
    Book.find(req.body).then(result => res.json(result)).catch(err => res.json(err))
}

module.exports = getBooks;