const express = require('express');
const todoRouter = require('./src/routes/todoRoutes');
const registerRoute = require('./src/routes/registerRoute');
const ensureDbFileExists = require('./src/initializers/ensureDbExists');

// Ensuring the todo data storage file exist on server start
ensureDbFileExists();

// Creating node web server
const app = express();
const paths = {
    todos: '/todos',
    auth: '/login',
    register: '/register',
};

app.use(express.json());

// todo services route
app.use(paths.todos, todoRouter);

// user registration route
app.use(paths.register, registerRoute);

app.listen(3000, () => {
    console.log('!--------Server-started-at-port-3000---------!');
});
