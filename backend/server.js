import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToMongoDB } from './db/connectToMongoDB.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


// Routes
{/*
 const authRoutes = require('./routes/auth');
const linkRoutes = require('./routes/links');

app.use('/api/auth', authRoutes);
app.use('/api/links', linkRoutes);   
*/}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToMongoDB()
});
