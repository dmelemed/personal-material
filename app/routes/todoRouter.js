var Todo = require('../models/todo');
var Book = require('../models/book');

module.exports = {

  getTodos: function(req, res) {
    console.log('getting todos');
    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.status(500).send(err)
      res.status(200).json(todos); // return all todos in JSON format
    });
  },

  createTodo: function(req, res) {
    console.log('creating todos');
    // create a todo, information comes from AJAX request from Angular
    Todo.create({
      text: req.body.text,
    }, function(err, todo) {
      if (err)
        res.send(err);
      // get and return all the todos after you create another
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
  },

  deleteTodo: function(req, res) {
    Todo.remove({
      _id: req.params.todo_id
    }, function(err, todo) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
  }
};
