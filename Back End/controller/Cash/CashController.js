const { createCashInit } = require("./createCashInit");
const validator = require('./validator');
const db = require('../../db/db');

const getCashInit = async (req, res) => {
    const {email, cashInit} = req.body;

    if(cashInit == '' || cashInit == 0 || cashInit == null || email == '') {
        return res.status(400).send('Input Vazio');
    } else {
        await createCashInit(email, cashInit);
    }
    return res.status(200).send('usuário criado')
}

const returnIfCashExists = async (req, res)  => {
    const {email} = req.body;

    let emailString;

    if (typeof email === 'object' && email !== null && 'email' in email) {
        emailString = email.email;
    } else {
        emailString = email;
    } 

    const cashExists = await validator.validateIfCashExists(emailString);

    return res.status(200).json({cashExists: cashExists});
}


module.exports = {
    getCashInit,
    returnIfCashExists
}