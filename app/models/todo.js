// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define nerd model
// module.exports allows passing this to other files when it is called
module.exports = mongoose.model('Todo', new Schema({
  text: String
}));
