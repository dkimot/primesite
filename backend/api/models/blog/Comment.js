const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// Define Comment schema
const CommentSchema = new Schema({
  text: String,
  author: String
});
// Register Comment model to mongoose object
mongoose.model('Comment', CommentSchema);
