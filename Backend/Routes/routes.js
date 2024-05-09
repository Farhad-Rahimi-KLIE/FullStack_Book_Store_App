const express = require("express");
const router = express.Router();
const upload = require("../Utils/Image");
const AddBooks = require("../Controller/Addbooks");
const getBooks = require("../Controller/getBooks");
const DeleteBooks = require("../Controller/Deletebooks");

router.post('/addbooks', upload.single('image'), AddBooks)
router.get('/getbooks', getBooks)
router.delete('/deletebooks/:id', DeleteBooks)


module.exports = router;