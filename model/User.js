const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  }
});

const User = mongoose.model('User', schema);
exports.User = User;