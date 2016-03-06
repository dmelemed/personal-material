var Todo = require('../models/todo');
var Book = require('../models/book');

module.exports = {

  getBooks: function(req, res) {
    console.log('getting books');
    Book.find(function(err, reading) {
      if (err)
        res.send(err)
      res.json(reading); // return all todos in JSON format
    });
  },

  createBook: function(req, res) {
    Book.create({
      title: req.body.title,
      author: req.body.author,
      pages: req.body.pages,
      currentPage: 0,
    }, function(err, book) {
      if (err)
        res.send(err);

      // get and return all the books after you create another
      Book.find(function(err, reading) {
        if (err)
          res.send(err);
        res.json(reading);
      });
    });
  },

  deleteBook: function(req, res) {
    console.log('deleting book, id: ' + req.params.book_id);
    Book.remove({
      _id: req.params.book_id
    }, function(err, reading) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Book.find(function(err, reading) {
        if (err)
          res.send(err);
        res.json(reading);
      });
    });
  },

  logReading: function(req, res) {
    console.log('logging reading ' + req.body._id + ', ' + req.body.title + ' current page = ' + req.body.currentPage);
    Book.findOneAndUpdate({
      _id: req.body._id
    }, req.body, {
      upsert: true
    }, function(err, reading) {
      if (err)
        res.send(err);
      Book.find(function(err, reading) {
        if (err)
          res.send(err)
        res.json(reading);
      });
    });
  }
};
