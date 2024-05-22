const express = require('express');
const Router = express.Router( );
const RegisterController = require('../controller/register/RegisterController');

Router.post('/register', RegisterController.GetInputValuesFromForm);


module.exports = Router;
