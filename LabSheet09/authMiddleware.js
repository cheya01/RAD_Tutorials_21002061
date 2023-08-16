// authMiddleware.js
const apiKey = 'your-secret-api-key'; // Replace with your actual API key

function authenticationMiddleware(req, res, next) {
  const providedApiKey = req.headers.authorization;

  if (providedApiKey === apiKey) {
    next(); // API key matches, continue to the next middleware or route
  } else {
    res.status(401).json({ message: 'Unauthorized' }); // API key doesn't match, send 401 Unauthorized response
  }
}

module.exports = authenticationMiddleware;
