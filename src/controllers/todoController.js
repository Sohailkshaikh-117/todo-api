const todoService = require('../services/todoService');

const getAllTodos = (request, response) => {
    const allTodos = todoService.getAllTodos(
        request.user.id || '12345',
        response.body.limitPerPage || 10,
        response.body.pageNumber || 1,
        response.body.searchKeyword || '',
        response.body.filter || {
            added_on_date_range: [], // ['dd-mm-yyyy', 'dd-mm-yyyy']
            completed_on_date_range: [], // ['dd-mm-yyyy', 'dd-mm-yyyy']
            added_on_date: '',
            completed_on_date: '',
            priority: [],
            status: [],
            tag: [],
        }
    );
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
