import { Router } from 'express';

import {addReview, getAllReviews} from '../controllers/reviewController.js';

const router = Router();

// Add review
router.post('', addReview);

// Get all reviews
router.get('', getAllReviews);

// Get one review
router.get('/:id', );

// Update a review
router.put('/:id', );

// Delete a review 
router.delete('/:id', );

export default router;
