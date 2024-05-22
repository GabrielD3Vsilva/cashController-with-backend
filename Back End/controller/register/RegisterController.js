const validator = require('./Validator');

const GetInputValuesFromForm = (req, res) => {
    const {nameUser, email, password, confirmPassword} = req.body;
    const authInputs =  validator.validateIfInputIsEmpty(nameUser, email, password, confirmPassword);

    if(authInputs == true) {
       const authPasswords = validator.validatePasswordsEquality(password, confirmPassword);

       if(authPasswords == false) {
            return res.status(400).send('as senhas não estão iguais')
       }

       return res.status(200).send('ok');
    }
    return res.status(400).send('algum input está vazio');
}



module.exports = {
    GetInputValuesFromForm,

}

