import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';  
import { connectToMongoDB } from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.route.js';
import linkRoutes from './routes/link.route.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/links', linkRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToMongoDB();
});
