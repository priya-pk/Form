const express= require('express');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
const db = "mongodb+srv://user_priya:prjz9496@mycluster.udzj7.azure.mongodb.net/Form?retryWrites=true&w=majority";

mongoose.connect(db,err=>{
  if(err){
    console.error("Error!"+ err)
  }
  else{
    console.log('Connected to MongoDB')
  }
})


router.get('/',(req,res)=>{
  res.send('From API routes');
})

router.post('/register',(req,res)=>{
  let userData = req.body;
  let user = new User(userData);
  user.save((err,registereduser)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send(registereduser)
    }
  })
})

router.post('/login',(req,res)=>{
  let userData = req.body
  User.findOne({email: userData.email},(err,user)=>{
    if(err){
      console.log(err)
    }
    else{
      if(!user){
        res.status(401).send('Invalid email')
      }
      else if(user.password !== userData.password){
        res.status(401).send('Invalid password')
      }
      else{
        res.status(200).send(user)
      }
    }
  })
})

module.exports = router;
