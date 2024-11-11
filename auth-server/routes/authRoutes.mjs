import bcrypt from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../User.mjs';

const router = express.Router();

// Реєстрація нового користувача
router.post('/register', async (request, response) => {
    const { username, password } = request.body;

    if (!username || !password) {
        return response.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return response.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        response.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);  // Додано логування помилки
        response.status(500).json({ message: 'Error registering user' });
    }
});

// Логін користувача
router.post('/login', async (request, response) => {
    const { username, password } = request.body;

    if (!username || !password) {
        return response.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(400).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return response.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        response.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error);  // Додано логування помилки
        response.status(500).json({ message: 'Error logging in' });
    }
});

export default router;
