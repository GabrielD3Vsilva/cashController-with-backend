const { Expenses } = require("../../db/db");

const createExpense = async (email, expenseTitle, expenseValue) => {
    try {
        const createANewExpense = await Expenses.create
        (
            {
                email: email,
                expenseTitle: expenseTitle,
                expenseValue: expenseValue
            }
        )

        return createANewExpense;
    } catch(error) {
        console.log('erro ao adicionar despeza de usuário', error);
    }
}

module.exports = {createExpense};