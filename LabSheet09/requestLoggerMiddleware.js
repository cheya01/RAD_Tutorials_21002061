// requestLoggerMiddleware.js
function requestLogger(req, res, next) {
    const timestamp = new Date().toLocaleString();
    const method = req.method;
    const url = req.url;
  
    console.log(`[${timestamp}] ${method} ${url}`);
    
    next(); // Continue to the next middleware or route
  }
  
  module.exports = requestLogger;
  