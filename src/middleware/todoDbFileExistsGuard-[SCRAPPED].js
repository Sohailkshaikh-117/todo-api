// scrapped middleware
const envConfig = require('../../config/config');
const fs = require('fs');

const dbFileExistsGuard = (request, response, next) => {
    try {
        if (!fs.existsSync(envConfig.todo_db_file_path)) {
            console.log(`[ERROR] DB file does not exist at path: '${envConfig.todo_db_file_path}'`);
            return response.status(500).json({
                success: false,
                message: `[ERROR] DB file does not exist at path: '${envConfig.todo_db_file_path}'`,
            });
        }
        next();
    }
    catch (e) {
        console.log('[ERROR] DB exists check failure at module [dbFileExistsGuard] with error: ', e);
        return response.status(500).json({
            success: false,
            message: `[ERROR] DB exists check failure at module [dbFileExistsGuard] with error: ${e}`,
        });
    }
};

module.exports = dbFileExistsGuard;
