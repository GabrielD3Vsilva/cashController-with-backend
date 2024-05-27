const express = require('express');
const routes = express.Router( );
const RegisterController = require('../controller/register/RegisterController');
const LoginController = require('../controller/Login/LoginController');
const CashController = require('../controller/Cash/CashController');

routes.post('/register', RegisterController.GetInputValuesFromForm);
routes.post('/login', LoginController.getDataFromUser);
routes.post('/registerCash', CashController.getCashInit);
routes.post('/returnIfCashExists', CashController.returnIfCashExists);
routes.post('/getExpenseFromForm', CashController.getExpenseFromForm);
routes.post('/returnIfExpensesExists', CashController.returnIfExpensesExists);

module.exports = routes;
