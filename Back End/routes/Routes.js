const express = require('express');
const routes = express.Router( );
const RegisterController = require('../controller/register/RegisterController');
const LoginController = require('../controller/Login/LoginController');

routes.post('/register', RegisterController.GetInputValuesFromForm);
routes.post('/login', LoginController.getDataFromUser);

module.exports = routes;
