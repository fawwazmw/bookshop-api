// routes/review.routes.js
const express = require('express');
const reviewController = require('../controllers/review.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

const router = express.Router();

// Task 5: Get a book review
router.get('/:isbn/reviews', reviewController.getBookReviews);

// Task 8: Add/modify a book review (requires authentication)
router.post('/:isbn/reviews', verifyToken, reviewController.addOrUpdateReview);

// Task 9: Delete book review added by that particular user (requires authentication)
router.delete('/:isbn/reviews', verifyToken, reviewController.deleteReview);

module.exports = router;