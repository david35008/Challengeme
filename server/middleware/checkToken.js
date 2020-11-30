require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function checkToken(req, res, next) {
  let token = req.headers.authorization;
  if (!token) return res.status(400).json({ message: 'Access Token Required' });
  token = token.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res.status(408).json({ message: 'Invalid Access Token' });
    }
    req.user = decoded;
    next();
  });
};
