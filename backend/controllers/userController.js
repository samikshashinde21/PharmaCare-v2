import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';

//@desc Auth user & get token
//@route POST/api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  console.log("Incoming login request body:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
  
    res.status(400).json({ message: "Email and password are required" });
    return;
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
    return;  
  }

  const isMatch = await user.matchPassword(password);
  console.log("Password match result:", isMatch);

  if (!isMatch) {
    console.log("Password mismatch for email:", email);
    res.status(401).json({ message: "Invalid email or password" });
    return;  
  }

  console.log("Login successful for user:", user.email);
  generateToken(res, user._id);

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

//@desc Register user
//@route POST/api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
     const {name, email, password} = req.body;

      const userExists = await User.findOne({email});

      if(userExists){
        res.status(400);
        throw new Error('User Already Exists!');
      }

      const user = await User.create({
        name,
        email,
        password
      });

      if(user) {
        generateToken(res, user._id);

        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin : user.isAdmin
        });
      }else{
        res.status(400);
        throw new Error('Invalid User Data');
      }
    
  });

//@desc Logout user / clear cookie
//@route POST/api/users/logout
//@access Private

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
      httpOnly:true,
      expires: new Date(0)
    });

    res.status(200).json({message : 'Logged out successfully'});
  });
  
//@desc Get user profile
//@route GET/api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id);

   if(user){
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin : user.isAdmin
    });
   }else{
    res.status(404);
    throw new Error('User not found');
   }
  });
  
//@desc update user profile
//@route PUT/api/users/profile
//@access Private

  const updateUserProfile = asyncHandler(async (req, res) => {
    console.log("Incoming profile update request body:", req.body);

    const user = await User.findById(req.user._id);
    
    if (!user) {
      console.log("No user found for profile update with ID:", req.user._id);
      res.status(404).json({ message: 'User not found' });
      return;
    }
 
    user.name = req.body.name?.trim() || user.name;
    user.email = req.body.email?.trim() || user.email;
  
    if (req.body.password) {
      const isPasswordAlreadyHashed = user.password.startsWith('$2a$'); 
      if (!isPasswordAlreadyHashed) {
          user.password = bcrypt.hashSync(req.body.password, 10);
      }
  }
  
    const updatedUser = await user.save();
    console.log("User profile updated successfully:", updatedUser.email);

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  });
  
//for admin who would be able to see all users

//@desc Get users 
//@route GET/api/users
//@access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
  });

//@desc Get user by ID
//@route GET/api/users/:id
//@access Private/Admin

const getUserByID = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')

    if(user){
      res.status(200).json(user);
    }else{
      res.status(404);
      throw new Error('User not found');
    }
  });
  
//@desc Delete User
//@route DELETE/api/users/:id
//@access Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if(user){
      if(user.isAdmin){
        res.status(400);
        throw new Error('Cannot delete admin user');
      }
      await User.deleteOne({_id: user._id})
      res.status(200).json({message: 'User deleted successfully'})
    }else{
      res.status(404);
      throw new Error('User not found')
    }
  });
  
//@desc Update User
//@route PUT/api/users/:id
//@access Private/Admin

const updateUser = asyncHandler(async (req, res) => {
   const user = await User.findById(req.params.id);

   if(user){
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
   }else{
    res.status(404)
    throw new Error('User not found')
   }
  });
  
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    updateUser,
    getUsers,
    deleteUser,
    getUserByID
};