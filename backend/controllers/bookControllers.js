const Book = require('../models/bookModel')

//save new book 
const saveNewBook = async (req, res)=> {
    try {
        if (!req.body.title ||!req.body.author ||!req.body.publishYear) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message });
    }
}

//get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
        count: books.length,
        data: books,
    });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

//get one book by id
const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
    
}

//update book
const updateBookById = async (req, res)=> {
    try {
        if (
            !req.body.title ||!req.body.author ||!req.body.publishYear
        ) {
            return res.status(400).send({
            message: 'Send all required fields: title, author, publishYear',
        });
    }
    
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
    
        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

//delete book
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
    
        const result = await Book.findByIdAndDelete(id);
    
        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }
    
        return res.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    saveNewBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBook
}