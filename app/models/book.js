// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Book', new Schema({
  title: String,
  author: String,
  pages: Number,
  currentPage: Number,
  history: {
    type: Array,
    default: []
  }
}));
