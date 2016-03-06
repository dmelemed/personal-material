// models ======================
var Todo = require('./models/todo');
var Book = require('./models/book');

var todoController = require('./routes/todoRouter');
var readingController = require('./routes/readingRouter');

// routes ======================
module.exports = function(app) {
  // server routes ===========================================================

  // api ---------------------------------------------------------------------
  // get all todos
  app.get('/api/todos', todoController.getTodos);

  // create todo and send back all todos after creation
  app.post('/api/todos', todoController.createTodo);

  // delete a todo
  app.delete('/api/todos/:todo_id', todoController.deleteTodo);

  // get all books
  app.get('/api/reading', readingController.getBooks);

  // create book and send back all books after creation
  app.post('/api/reading', readingController.createBook);

  // delete a book
  app.delete('/api/reading/:book_id', readingController.deleteBook);

  // log reading and send back all books after updating
  app.post('/api/reading/log', readingController.logReading);

  // frontend routes =========================================================
  app.get('/calendar', function(req, res) {
    res.sendfile('./public/views/calendar.html');
  });

  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
};
