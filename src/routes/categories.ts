import express from 'express';
import dbPromise from '../db';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = await dbPromise;
    const categories = await db.all('SELECT * FROM category');
    res.json(categories);
  } catch (err) {
    console.error('Error fetching category:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
