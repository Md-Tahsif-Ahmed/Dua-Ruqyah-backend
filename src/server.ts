import express from 'express';
import cors from 'cors';
import categoriesRouter from './routes/categories';
import subcategoriesRouter from './routes/subcategories';
import duasRouter from './routes/duas';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/categories', categoriesRouter);
app.use('/api/subcategories', subcategoriesRouter);
app.use('/api/duas', duasRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Dua & Ruqyah API!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
