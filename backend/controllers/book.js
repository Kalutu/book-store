import { Book } from "../models/Book.js";

export const createBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const newBook = await Book.create(req.body);
    res.status(201).send({ newBook });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ count: books.length, books });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const book = await Book.findOne({ _id: bookId });

    if (!book) {
      return res.status(401).send(`No book with id : ${bookId}`);
    }
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(401).send(`No book with id : ${bookId}`);
    }

    res.status(200).json({ updatedBook });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;

    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(401).send(`No book with id : ${bookId}`);
    }

    res.status(200).json({ msg: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
