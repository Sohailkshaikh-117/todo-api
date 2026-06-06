const express = require('express');
const userRegistrationValidator = require('../validators/userRegistrationValidator');
const registerUserController = require('../controllers/registrationController');

const router = express.Router();

// router.post('', middleware, controller);

router.post('/', userRegistrationValidator, registerUserController);

module.exports = router;
