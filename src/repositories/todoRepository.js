const envConfig = require('../../config/config');
const fs = require('fs');

const readTodoData = () => {
    try {
        const todoData = fs.readFileSync(envConfig.todo_db_file_path, 'utf-8');
        return JSON.parse(todoData);
    }
    catch (e) {
        console.log('[ERROR] Cannot read todo data, error: ', e);
        return {};
    }
};

const writeTodoData = (data) => {
    try {
        const todoData = JSON.stringify(data, null, 2);
        fs.writeFileSync(envConfig.todo_db_file_path, todoData);
        return true;
    }
    catch (e) {
        console.log('[ERROR] Cannot write todo data, error: ', e);
        return false;
    }
};

module.exports = {
    readTodoData,
    writeTodoData,
};
