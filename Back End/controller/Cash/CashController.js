const { createCashInit } = require("./createCashInit");
const {CashInit} = require('../../db/db');
const {createExpense} = require('./createExpense');
const {Expenses,ExpenseValue, Cash} = require('../../db/db');

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
        const freeCashInDB = await Cash.find({email: email});
        const expenseInDb = await ExpenseValue.find({email: email});

        await ExpenseValue.create(
            {   
                email: email,
                value:  0,

            }
        )

        console.log(cashInitInDB);

        if(cashInitInDB.length > 0) {
            return res.status(200).send(
                {
                    boolean: true, 
                    cashInit: cashInitInDB[0].cashInit,
                    freeCash: freeCashInDB[0].cashvalue,
                    expenseCash: expenseInDb[0].value
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
    if(expenseTitle == '' || expenseValue =='' ) {
        return res.send('campo vazio: ');
    }

    await createExpense(email, expenseTitle, expenseValue);
    const expensesInDB = await Expenses.find({email: email});
    const cashInitInDB = await CashInit.find({email: email});
    const theNewFreeCash =  {cashvalue: Number(Number(cashInitInDB[0].cashInit)) - expensesInDB[0].expenseValue};
    const findExpenseValue = await ExpenseValue.find({email: email});

    await ExpenseValue.updateOne({email: email}, {value: Number(findExpenseValue[0].value) + Number(expenseValue)})

    await Cash.updateOne({email: email}, theNewFreeCash);
    return res.status(200).send('expense created');
}

const returnIfExpensesExists = async (req, res) => {
    const {email} = req.body;
    let arrayExpenses = [];
    
   const expensesInDB = await Expenses.find({email: email});

    if(expensesInDB.length > 0) {
            for(let i = 0; i < expensesInDB.length; i++) {
                arrayExpenses.push({value: expensesInDB[i].expenseValue, title: expensesInDB[i].expenseTitle, id: expensesInDB[i]._id});

                console.log(arrayExpenses[i]);
            }

            const expensesValues = await ExpenseValue.find({email: email});
            return res.status(200).json({arrayExpenses: arrayExpenses, expensesValues: expensesValues[0].value});
    }

    console.log('dont exists')
    return res.send('Não há despezas...');
}

const deleteExpense = async (req, res) => {
    const {id, email} = req.body;
    try {
        const expenseToFind = await Expenses.find({_id: id});
        const currentlyCash = await Cash.find({email: email});
        const latestExpenseValue = await ExpenseValue.find({email: email});

        await ExpenseValue.updateOne({email: email}, {value: Number(expenseToFind[0].expenseValue) - Number(latestExpenseValue[0].value)});

        await Expenses.deleteOne({_id: id});
        await Cash.updateOne({email: email}, {cashvalue: Number(expenseToFind[0].expenseValue) + Number(currentlyCash[0].cashvalue)});
    } catch (error) {
        console.error(error);
    }

    return res.send('Delete expense');
    
}


module.exports = {
    getCashInit,
    returnIfCashExists,
    getExpenseFromForm,
    returnIfExpensesExists,
    deleteExpense
}