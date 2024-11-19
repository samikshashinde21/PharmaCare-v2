import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

//Protect routes
const protect = asyncHandler(async(req, res, next) => {
    let token;
    console.log('Cookies:', req.cookies);
    //Read the JWT from the cookie
    token = req.cookies.jwt;
    console.log('JWT Token:', token);

    if(token) {
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Decoded Token:', decoded);  
            req.user = await User.findById(decoded.userId).select('-password');
            console.log('Decoded User:', req.user);
            next();

        }catch(error){
            console.log('Token verification error:', error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }

    }else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

//Admin middleware

const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401);
        throw new Error('Not authorized as admin');
    }
};

export {protect, admin}; 
