const userRegistrationService = require('../services/userRegistrationService');

const registerUserController = (request, response) => {
    const { username, password } = request.body;
    const registration = userRegistrationService(username, password);
};

module.exports = registerUserController;
