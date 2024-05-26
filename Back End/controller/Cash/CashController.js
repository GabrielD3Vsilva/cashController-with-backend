const { createCashInit } = require("./createCashInit");
const {CashInit} = require('../../db/db')

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
            return res.status(200).send(true);
        } else {
            return res.status(200).send(false);
        }
    } catch {
        res.status(500).send('Erro ao buscar cashInit')
    }
    
}


module.exports = {
    getCashInit,
    returnIfCashExists
}