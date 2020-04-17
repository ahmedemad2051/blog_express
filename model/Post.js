const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
});

const Post = mongoose.model('Post', schema);
exports.Post = Post;