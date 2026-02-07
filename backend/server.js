import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

// Import and connect to the database
connectDB();
// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Food Delivery API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});