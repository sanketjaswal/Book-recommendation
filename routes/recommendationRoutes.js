import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

// Get book recommendations based on user preferences
router.post('/', async (req, res) => {
  try {
    const { genres, authors } = req.body;
    const books = await Book.find({
      $or: [
        { genre: { $in: genres } },
        { author: { $in: authors } }
      ]
    }).sort({ rating: -1 }).limit(10);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;