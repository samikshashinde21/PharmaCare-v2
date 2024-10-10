import express from 'express';

const router = express.Router();
import asyncHandler from '../middleware/asyncHandler';
import Product from '../models/productModel';

router.get('/',asyncHandler( async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

//to get single product
router.get('/',asyncHandler( async (req,res) => {
    const product = await Product.findById(req.params.id);

    //if product found
    if(product){

        return  res.json(product);
    }

    //if not
    res.status(404).json({message: 'Product not found'});
}) );

export default router;