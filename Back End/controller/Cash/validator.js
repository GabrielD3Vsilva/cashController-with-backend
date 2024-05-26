const {CashInit} = require('../../db/db');

const validateIfCashExists = async (emailString) => {
    try {
        const cashInitInDb = await CashInit.find({email: emailString});
        if(cashInitInDb.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch(error) {
        console.log('houve erro ao tentar buscar cashInit', error)
    }
}

module.exports = {
    validateIfCashExists
}