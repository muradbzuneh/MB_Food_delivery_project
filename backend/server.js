import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRoutes from './routes/foodRoutes.js';
import testRoute from "./routes/taseRoute.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

// Import and connect to the database
connectDB();
// Sample route
app.use('/api/foods', foodRoutes); 
app.use('/images', express.static('uploads')); // Serve uploaded images
app.use("/api/test", testRoute);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Food Delivery API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});