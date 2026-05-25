const express = require('express');
const todoRouter = require('./src/routes/todoRoutes');
const ensureDbFileExists = require('./src/initializers/ensureDbExists');

// Ensuring the todo data storage file exist on server start
ensureDbFileExists();

// Creating node web server
const app = express();
const paths = {
    todos: '/todos',
    auth: '/login'
};

app.use(express.json());

// register router
app.use(paths.todos, todoRouter);

app.listen(3000, () => {
    console.log('!--------Server-started-at-port-3000---------!');
});
