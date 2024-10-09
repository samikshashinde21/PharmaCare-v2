import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users";
import products from "./data/products";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db";

dotenv.config(); //initialize dotenv to connect db

connectDB();

const importData = async() => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        //insert products
        const sampleProducts = products.map((product) =>{
            return { ...product, user:adminUser};
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!'.green.inverse);
        
    } catch (error) {
        
    }
}