const express = require('express');
const todoController = require('../../controllers/todoController');
const router = express.Router();

const paths = {
    root: '/',
    todoId: '/:id'
};

// get all todo
router.get(paths.root, todoController.getAllTodos);

// get todo by id
router.get(paths.todoId, todoController.getTodoById);

// add new todo
router.post(paths.root, todoController.addNewTodo);

// update todo by id
router.patch(paths.todoId, todoController.updateTodoById);

// delete todo by id
router.delete(paths.todoId, todoController.deleteTodoById);

// delete all todos
router.delete(paths.root, todoController.deleteAllTodos);

module.exports = router;
