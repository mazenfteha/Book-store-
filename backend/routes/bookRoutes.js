const express = require('express');
const router = express.Router()

const { 
    saveNewBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBook
} = require ('../controllers/bookControllers')

router.route("/").post(saveNewBook)
router.route("/").get(getAllBooks)
router.route('/:id').get(getBookById)
router.route('/:id').put(updateBookById)
router.route('/:id').put(deleteBook)


module.exports = router ;

