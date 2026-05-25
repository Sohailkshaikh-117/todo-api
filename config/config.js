const path = require('path');
require('dotenv').config();

const envConfig = {};

envConfig.todo_db_file_path = path.resolve(
    __dirname,
    process.env.todo_db_file_path || '../data/todo_data.json',
);

envConfig.todo_db_folder_path = path.resolve(
    __dirname,
    process.env.todo_db_folder_path || '../data',
);

console.log(envConfig);

module.exports = envConfig;
