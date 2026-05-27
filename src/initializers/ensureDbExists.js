const path = require('path');
const fs = require('fs');
const envConfig = require('../../config/config');

const ensureDbFileExists = () => {
    try {
        if (!fs.existsSync(envConfig.todo_db_folder_path)) {
            fs.mkdirSync(envConfig.todo_db_folder_path, { recursive: true });
        }
        // if (!fs.existsSync(envConfig.todo_db_file_path)) {
        //     fs.writeFileSync(envConfig.todo_db_file_path, JSON.stringify({}, null, 2));
        // }
    }
    catch (e) {
        console.log('[ERROR] Failed to ensure if DB file exist', e);
    }
};

module.exports = ensureDbFileExists;
