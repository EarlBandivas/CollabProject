import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import adminRoute from './routes/adminRoute.js';

dotenv.config();

const app = express();

// Middleware for JSON parsing
app.use(express.json());
app.use(cors());

// MongoDB connection setup - remove deprecated options
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use the routes in the app
app.use('/api/users', userRoute);
app.use('/api/admin', adminRoute);

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
