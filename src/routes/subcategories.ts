import express from 'express';
import dbPromise from '../db';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = await dbPromise;
    const subcategories = await db.all('SELECT * FROM sub_category');
    res.json(subcategories);
  } catch (err) {
    console.error('Error fetching subcategory:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
