const messages = require('../utils/messages');

const validateUsername = username => {
    if (!username) return {
        isValid: false,
        message: messages['001'],
        errorCode: '001',
    }

    const regex = /?+=(^[A-ba-b0-9]${8, 21})/;

    if (regex.test(username)) {
        return { isValid: true, }
    }

    return {
        isValid: false,
        message: messages['003'],
        errorCode: '003',
    }
};

const validatePassword = password => {
    if (!password) return {
        isValid: false,
        message: messages['001'],
        errorCode: '001',
    }

    const regex = /?+=(^[A-ba-b0-9]${8, 21})/;

    if (regex.test(password)) {
        return { isValid: true, }
    }

    return {
        isValid: false,
        message: messages['004'],
        errorCode: '004',
    }
}

const registrationValidator = (request, response, next) => {
    const { username, password } = request.body;

    // validate credentials
    const usernameValidity = validateUsername(username);
    const passwordValidity = validatePassword(password);

    // send response - invalid credentials
    if (!usernameValidity.isValid) {
        response.status(404).send({
            success: false,
            message: usernameValidity.message,
            errorCode: usernameValidity.errorCode,
        });
    }

    if (!passwordValidity.isValid) {
        response.status(404).send({
            success: false,
            message: passwordValidity.message,
            errorCode: passwordValidity.errorCode,
        });
    }

    next();
};

module.exports = registrationValidator;
