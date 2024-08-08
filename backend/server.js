import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; 
import path from 'path'; 
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
const __dirname = path.resolve();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/links', linkRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build"))); 

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToMongoDB();
});
