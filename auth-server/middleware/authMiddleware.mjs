import jwt from 'jsonwebtoken';

const authMiddleware = (request, response, next) => {
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) return response.status(401).json({ message: 'Authorization token required' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.userId = decoded.userId;
        next();
    } catch {
        response.status(401).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;
