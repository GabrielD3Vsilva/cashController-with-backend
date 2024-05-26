const { createCashInit } = require("./createCashInit");
const {CashInit} = require('../../db/db');
const {createExpense} = require('./createExpense');

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
    try {
        const cashInitInDB = await CashInit.find({email: email});
        console.log(cashInitInDB);

        if(cashInitInDB.length > 0) {
            return res.status(200).send(
                {
                    boolean: true, 
                    cashInit: cashInitInDB[0].cashInit
                });
        } else {
            return res.status(200).send(false);
        }
    } catch {
        res.status(500).send('Erro ao buscar cashInit')
    }
}

const getExpenseFromForm = async (req, res) => {
    const {email, expenseTitle, expenseValue} = req.body;
    if(expenseTitle == '' || expenseValue =='') {
        return;
    }

    const expenseInDB = await createExpense(email, expenseTitle, expenseValue);
    return res.status(200).send(expenseInDB);
}


module.exports = {
    getCashInit,
    returnIfCashExists,
    getExpenseFromForm
}