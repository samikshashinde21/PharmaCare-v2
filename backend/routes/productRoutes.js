import express from 'express';

const router = express.Router();
import asyncHandler from '../middleware/asyncHandler';

router.get('/',asyncHandler( async (req, res) => {
    res.json(products);
}));

router.get('/',asyncHandler( async (req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
}) );

export default router;