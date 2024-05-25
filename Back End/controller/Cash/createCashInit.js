const {CashInit} = require('../../db/db');

const createCashInit = async (email, cashInit) => {
    try {
        await CashInit.create({
            email: email,
            cashInit: cashInit
        })
    } catch(error) {
        console.log('error',  error);
    }
}

module.exports = {
    createCashInit
}