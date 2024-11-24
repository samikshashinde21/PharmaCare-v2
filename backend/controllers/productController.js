import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

//@desc Fetch all products
//@route GET/api/products
//@access Public

/* const getProducts = asyncHandler(async (req, res) => {

    const pageSize = 8 ;
    const page = Number(req.query.pageNumber) || 1;

   const keyword = req.query.keyword ? {
   name : {$regex: req.query.keyword, $options : 'i'}
   } : {};

    const count = await Product.countDocuments({...keyword});

    const products = await Product.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
    res.json({products, page, pages : Math.ceil(count/pageSize)});
}); */

const getProducts = asyncHandler(async (req, res) => {
    const pageSize = process.env.PAGINATION_LIMIT;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: "i" } }
      : {};
    const category = req.query.category || "";
  
    // Filter by multiple categories if provided
    const categoryFilter = category
      ? { category: { $in: category.split(",") } } // $in operator to match any category in the array
      : {};
  
    const priceFilter = req.query.price;
    let priceRangeFilter = {};
    if (priceFilter) {
      const [minPrice, maxPrice] = priceFilter.split("-").map(Number);
      priceRangeFilter = { price: { $gte: minPrice, $lte: maxPrice } };
    }
  
    // Combine all filters
    const filter = { ...keyword, ...categoryFilter, ...priceRangeFilter };
  
    const count = await Product.countDocuments(filter);
  
    let sort = {};
    if (req.query.sort === "price") {
      sort = { price: 1 }; // Sort by price ascending
    } else if (req.query.sort === "rating") {
      sort = { rating: -1 }; // Sort by rating descending
    }
  
    const products = await Product.find(filter)
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort(sort);
  
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  });
  


//@desc Fetch a product
//@route GET/api/products/:id
//@access Public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    //if product found
    if(product){

        return  res.json(product);
    }else{

    //if not
    res.status(404);
   throw new Error('Resource not found'); 
    }
});

//@desc create a product
//@route POST/api/products
//@access Public/Admin

const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price : 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample Brand',
        category: 'Sample Category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample desc',

    })

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

//@desc update a product
//@route PUT/api/products/:id
//@access Public/Admin

const updateProduct = asyncHandler(async (req, res) => {
    const {name, price, description, image, brand, category, countInStock} = req.body;

    const product = await Product.findById(req.params.id);
  
    if(product){
        product.name = name;
        product.price= price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;

        const updatedProduct = await product.save();
        res.json(updateProduct);

    }else{
        res.status(404);
        throw new Error('Resource not Found');
    }
});

//@desc delete a product
//@route DELETE/api/products/:id
//@access Private/Admin

const deleteProduct = asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id);
  
    if(product){
        await Product.deleteOne({_id: product._id});
        res.status(200).json({message: 'Product Deleted'});

    }else{
        res.status(404);
        throw new Error('Resource not Found');
    }
});


//@desc create a product review
//@route POST/api/products/:id/reviews
//@access Private

const createProductReview = asyncHandler(async (req, res) => {

    const {rating, comment} = req.body;

    const product = await Product.findById(req.params.id);
  
    if(product){
        const alreadyReviewed = product.reviews.find(
            (review) => review.user.toString() === req.user._id.toString()
        );

        if(alreadyReviewed){
            res.status(400);
            throw new Error('Product already reviewed');
        }

        const review = {
            name : req.user.name,
            rating : Number(rating),
            comment,
            user : req.user._id,
        };

        product.reviews.push(review);

        product.numReviews = product.reviews.length;

        product.rating = 
        product.reviews.reduceRight((acc, review) => acc.review.rating, 0)/ product.reviews.length;

        await product.save();
        res.status(201).json({message : 'Review Added'});

    }else{
        res.status(404);
        throw new Error('Resource not Found');
    }
});

//@desc Get Top rated products
//@route GET/api/products/top
//@access Public

const getTopProducts = asyncHandler(async (req, res) => {
const products = await Product.find({}).sort({rating : -1}).limit(3);

res.status(200).json(products);
});

//@desc Get Products by category
const getProductsByCategory = asyncHandler(async (req, res) => {
    const pageSize = 8;
    const page = Number(req.query.pageNumber) || 1;
    const category = req.params.category;
    const sortBy = req.query.sortBy || 'price'; // Default sorting by price
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

    const count = await Product.countDocuments({ category });
    const products = await Product.find({ category })
        .sort({ [sortBy]: sortOrder })
        .limit(pageSize)
        .skip(pageSize * (page - 1));

    res.json({ products, page, pages: Math.ceil(count / pageSize) });
});
  

export {
    getProducts, 
    getProductById, 
    createProduct, 
    updateProduct,
    deleteProduct,
    createProductReview,
    getTopProducts,
    getProductsByCategory};