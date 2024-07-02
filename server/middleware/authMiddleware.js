// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

const authorizeRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.sendStatus(403);
  next();
};

module.exports = { authenticateToken, authorizeRole };
