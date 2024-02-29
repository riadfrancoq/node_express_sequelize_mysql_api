import { Router } from 'express';

import {addProduct, deleteProduct, getAllProducts, getOneProduct, getPublishedProduct, updateProduct} from '../controllers/productController.js';

const router = Router();

// Add Products
router.post('', addProduct);

// Get all products
router.get('', getAllProducts);

// Get Published Products
router.get('/published', getPublishedProduct);

// Get one product
router.get('/:id', getOneProduct);

// Update a product
router.put('/:id', updateProduct);

// Delete a product 
router.delete('/:id', deleteProduct);

export default router;
