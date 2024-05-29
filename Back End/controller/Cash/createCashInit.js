const {CashInit} = require('../../db/db');
const {Cash} = require('../../db/db');

const createCashInit = async (email, cashInit) => {
    try {
        await CashInit.create(
            {
                email: email,
                cashInit: cashInit
            }
        )


        await Cash.create(
            {
                email: email,
                cashvalue: cashInit
            }
        )
    } catch(error) {
        console.log('error',  error);
    }
}

module.exports = {
    createCashInit
}