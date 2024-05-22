const validator = require('./Validator');
const Crud = require('./Crud');

const GetInputValuesFromForm = async (req, res) => {
    const {nameUser, email, password, confirmPassword} = req.body;
    const authInputs =  validator.validateIfInputIsEmpty(nameUser, email, password, confirmPassword);

    if(authInputs == true) {
       const authPasswords = validator.validatePasswordsEquality(password, confirmPassword);

       if(authPasswords == false) {
            return res.status(400).send('as senhas não estão iguais')
       } 

       if(authPasswords == true) {
           await Crud.createUser(nameUser, email, password);
           return res.status(200).send('usuário criado');
       }
       
    }
    return res.status(400).send('algum input está vazio');
}



module.exports = {
    GetInputValuesFromForm,
}

