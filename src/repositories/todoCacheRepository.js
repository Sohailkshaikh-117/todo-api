
// a todo cache as array of objects to maintain a sorted list ready
const isTodoCached = false;
const todoCache = {};

const initTodoCache = () => {
    isTodoCached = true;


};

// const readCache = () => { };

module.exports = {
    isTodoCached,
    todoCache,
};
