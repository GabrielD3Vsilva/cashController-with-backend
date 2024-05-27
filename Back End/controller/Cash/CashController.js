const { createCashInit } = require("./createCashInit");
const {CashInit} = require('../../db/db');
const {createExpense} = require('./createExpense');
const {Expenses} = require('../../db/db');

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

    await createExpense(email, expenseTitle, expenseValue);
    return res.status(200).send('expense created');
}

const returnIfExpensesExists = async (req, res) => {
    const {email} = req.body;
    let arrayExpenses = [];
    
   const expensesInDB = await Expenses.find({email: email});
    
    
    if(expensesInDB.length > 0) {
            for(let i = 0; i < expensesInDB.length; i++) {
                arrayExpenses.push({value: expensesInDB[i].expenseValue, title: expensesInDB[i].expenseTitle});

                console.log(arrayExpenses[i]);
            }
            return res.json({arrayExpenses:arrayExpenses});
    }

    console.log('dont exists')
    return res.send('Não há despezas...');
   

   

}


module.exports = {
    getCashInit,
    returnIfCashExists,
    getExpenseFromForm,
    returnIfExpensesExists
}