import express from 'express';
import cors from 'cors';
import { join } from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(join(__dirname, 'uploads')));


app.use('/api/courses', courseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});