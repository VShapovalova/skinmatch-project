import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import authMiddleware from './auth-server/middleware/authMiddleware.mjs';
import authRoutes from './auth-server/routes/authRoutes.mjs';

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());

try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected');
} catch (error) {
    console.log('Database connection error:', error);
}

app.use('/api/auth', authRoutes);

app.get('/api/protected', authMiddleware, (request, response) => {
    response.json({ message: 'This is a protected route' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
