const Book = require('../Models/books')

const AddBooks = (req, res)=>{
    let file = req.file.filename;
    let title = req.body.title;
    let price = req.body.price;
    Book.create({
        file : file,
        title : title,
        price : price
    }).then(result => res.json(result)).catch(err => res.json(err))
}

module.exports = AddBooks;