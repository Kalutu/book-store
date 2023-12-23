import express from "express";
import {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/book.js";

export const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);
