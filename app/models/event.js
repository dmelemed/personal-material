var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Event', new Schema({
  desc: String,
  createdTime: String,
  completedTime: Number,
  : Number,
  history: {
    type: Array,
    default: []
  }
}));
