
import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new book
router.post('/', async (req, res) => {
  console.log('Received Data:', req.body); // Debugging line

  try {
      const book = new Book(req.body);
      await book.save();
      res.json(book);
  } catch (err) {
      console.error(err); // Logs full error
      res.status(500).json({ error: err.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;