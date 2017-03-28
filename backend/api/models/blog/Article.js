const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Comment  = require('./Comment');

// Define Article schema
const ArticleSchema = new Schema({
  title: String,
  slug: String,
  content: String,
  author: String,
  comments: [Comment.schema]
});
// Register Article model to mongoose object
mongoose.model('Article', ArticleSchema);
