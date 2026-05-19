const express = require('express');
const todoRouter = require('./routes/todoRoutes');

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
