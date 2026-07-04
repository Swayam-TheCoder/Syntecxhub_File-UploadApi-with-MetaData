const User = require('../models/User');
const fs = require('fs');
const path = require('path');

// Create User
const createUser = async(req, res) => {
  try{
    const { name, email } = req.body;
    if(!name || !email){
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const existingUser = await User.findOne({ email });

    if(existingUser){
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const user = await User.create({ name, email });
    res.status(201).json({ message: 'User created successfully', user });
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const uploadProfile = async(req, res) => {
  try{
    const user = await User.findById(req.params.id);
    if(!user){
      return res.status(404).json({ message: 'User not found' });
    }

    if(!req.file){
      return res.status(400).json({ message: 'No file uploaded'});
    }

    user.profileImage = req.file.path;
    await user.save();
    res.status(200).json({ message: 'Profile image uploaded successfully', profileImage: user.profileImage });

  }
  catch(err){
    res.status(400).json({ message: err.message });
  }
}

module.exports = { createUser, uploadProfile };