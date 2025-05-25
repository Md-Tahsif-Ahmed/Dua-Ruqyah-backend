import express from 'express';
import dbPromise from '../db';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = await dbPromise;
    const duas = await db.all('SELECT * FROM dua');
    res.json(duas);
  } catch (err) {
    console.error('Error fetching dua:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
