import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

// Get book recommendations based on user preferences
router.post('/', async (req, res) => {
  try {
    const { title, genres, authors  } = req.body;

    // Build the query object
    const query = {};

    if (title && title.length > 0) {
      query.title = { $in: title };
    }

    if (genres && genres.length > 0) {
      query.genre = { $in: genres };
    }

    if (authors && authors.length > 0) {
      query.author = { $in: authors };
    }

    // if (rating && rating.length > 0) {
    //   query.rating = { $in: rating };
    // }

    console.log("query", query);


    const books = await Book.find(query).sort({ rating: -1 }).limit(10);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
