import express from 'express';

const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

router.get('/',asyncHandler( async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

//to get single product
router.get('/:id',asyncHandler( async (req,res) => {
    const product = await Product.findById(req.params.id);

    //if product found
    if(product){

        return  res.json(product);
    }else{

    //if not
    res.status(404);
   throw new Error('Resource not found'); 
    }
}) );

export default router;