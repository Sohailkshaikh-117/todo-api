const envConfig = require('../../config/config');
const fs = require('fs');
const initTodoModel = require('../models/initUserTodoListModel');

const readTodoData = () => {
    try {
        const todoData = fs.readFileSync(envConfig.todo_db_file_path, 'utf-8');
        return JSON.parse(todoData);
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            console.log('[WARNING] File absent, creting new file at path:', envConfig.todo_db_file_path);
            fs.writeFileSync(envConfig.todo_db_file_path, JSON.stringify(initTodoModel, null, 2));
            return initTodoModel;
        }
        console.log('[ERROR] Cannot read todo data, error: ', e);
        return initTodoModel;
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

readTodoData();

module.exports = {
    readTodoData,
    writeTodoData,
};
