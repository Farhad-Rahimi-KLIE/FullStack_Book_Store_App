const Book = require('../Models/books')
const fs = require('fs')
const DeleteBooks = async (req, res)=>{
    const id = req.params.id;

    try {
        const userDelete = await Book.findByIdAndDelete({_id : id});
        const {file} = userDelete;
        if (file) {
            fs.unlinkSync(`./uploads/${file}`);
        }
        return res.status(200).json({
            code : 200,
            message : "User Delete Successfully",
            data : userDelete
        });
    } catch (error) {
        res.status(501).json({
            code : 501,
            message : error.message,
            error : true
        })
    }

}

module.exports = DeleteBooks;