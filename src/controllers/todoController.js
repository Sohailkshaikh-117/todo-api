const todoService = require('../services/todoService');

const getAllTodos = (request, response) => {
    const allTodos = todoService.getAllTodos();
};

const getTodoById = (request, response) => { };

const addNewTodo = (request, response) => { };

const updateTodoById = (request, response) => { };

const deleteTodoById = (request, response) => { };

const deleteAllTodos = (request, response) => { };

module.exports = {
    getAllTodos,
    getTodoById,
    addNewTodo,
    updateTodoById,
    deleteTodoById,
    deleteAllTodos
};
