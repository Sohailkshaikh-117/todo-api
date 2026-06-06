
const validateUsername = username => {
    if (!username) return {
        isValid: false,
        message: 'Username not found',
        messageCode: '001',
    }


};

const registrationValidator = (request, response, next) => {
    const { username, password } = request.body;

    const usernameValidity = validateUsername(username);
    const passwordValidity = validatePassword(password);

    if (!usernameValidity.isValid) {
        response.status(404).send({
            success: false,
            message: usernameValidity.message,
            messageCode: usernameValidity.messageCode,
        });
    }

    if (!passwordValidity.isValid) {
        response.status(404).send({
            success: false,
            message: passwordValidity.message,
            messageCode: passwordValidity.messageCode,
        });
    }

    next();
};

module.exports = registrationValidator;
