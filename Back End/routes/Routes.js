const express = require('express');
const routes = express.Router( );
const RegisterController = require('../controller/register/RegisterController');

routes.post('/register', RegisterController.GetInputValuesFromForm);


module.exports = routes;
