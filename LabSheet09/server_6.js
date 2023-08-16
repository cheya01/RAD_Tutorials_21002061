const express = require('express');
const app = express();
const port = 3000;

// Calculate discounted price
function calculateDiscountedPrice(price, discount) {
  const discountedPrice = price - (price * (discount / 100));
  return discountedPrice;
}

// Error handling middleware for invalid input
function errorHandler(err, req, res, next) {
  res.status(400).json({ error: err.message });
}

// Route to handle price discount calculation
app.get('/calculate-discount', (req, res, next) => {
  const originalPrice = parseFloat(req.query.price);
  const discountPercentage = parseFloat(req.query.discount);

  if (isNaN(originalPrice) || isNaN(discountPercentage)) {
    return next(new Error('Invalid input for original price or discount'));
  }

  const discountedPrice = calculateDiscountedPrice(originalPrice, discountPercentage);
  const discountAmount = originalPrice - discountedPrice;

  res.json({
    originalPrice: originalPrice,
    discountPercentage: discountPercentage,
    discountAmount: discountAmount,
    discountedPrice: discountedPrice
  });
});

// Use error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
