const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// Define User schema
const UserSchema = new Schema({
  email: String,
  password: String
});
// Register User model with mongoose object
mongoose.model('User', UserSchema);
