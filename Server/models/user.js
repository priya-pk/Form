const mongoose = require('mongoose');

const Schema = mongoose.Schema
const userSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  confirmPassword: String,
  phone: Number
})

module.exports = mongoose.model('user',userSchema,'users');