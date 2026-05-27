const cacheRepo = require('../repositories/todoCacheRepository');
const dbFile = require('../repositories/todoRepository');

/**
 * getAllTodos() - get list of all todos, with search and filter criteria and paginated
 * @param {number} limitPerPage - limit of records to be displayed per page
 * @param {number} pageNumber - current page to display
 * @param {string} searchKeyword - filter the todo list based on search keyword found in title and description
 * @param {object} filter - the filter criteria to be applied on the todo list
 * @param {array} filter.added_on_date_range - the start and end date filter on todo initial add date
 * @param {array} filter.completed_on_date_range - the start and end date filter on todo completion date
 * @param {string} filter.added_on_date - specific date filter on todo initial add date
 * @param {string} filter.completed_on_date - specific date filter on todo completion date
 * @param {array} filter.priority - multiple priorities to filter by
 * @param {array} filter.status - multiple status to filter by
 * @param {array} filter.tag - multiple tags to filter by
 */
const getAllTodos = (
    limitPerPage = 10,
    pageNumber = 1,
    searchKeyword = '',
    filter = {
        added_on_date_range: [], // ['dd-mm-yyyy', 'dd-mm-yyyy']
        completed_on_date_range: [], // ['dd-mm-yyyy', 'dd-mm-yyyy']
        added_on_date: '',
        completed_on_date: '',
        priority: [],
        status: [],
        tag: [],
    }
) => {
    if (!cacheRepo.isTodoCached) {
        const userTodoObj = dbFile.readTodoData();

        if (!userTodoObj.isTodoAdded) return [];
    }
};

// Pure Cache read operation
const getTodoMetrics = () => { };
const getTodoFilters = () => { };
const refreshTodoTags = () => { };
const getTodoById = (id) => { };

// DB File Write operation and Update/Create Cache operation
const addNewTodo = (title, description, tag) => { };
const updateTodoById = (id) => { };
const deleteTodoById = (id) => { };
const deleteAllTodos = () => { };

module.exports = {
    getAllTodos,
    getTodoById,
    addNewTodo,
    updateTodoById,
    deleteTodoById,
    deleteAllTodos
};
