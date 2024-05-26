const validator = require('./Validator');
const Crud = require('./Crud');

const GetInputValuesFromForm = async (req, res) => {
    const {nameUser, email, password, confirmPassword} = req.body;
    const authInputs =  validator.validateIfInputIsEmpty(nameUser, email, password, confirmPassword);

        if(authInputs) {
            const authPasswords = validator.validatePasswordsEquality(password, confirmPassword);
     
            if(authPasswords == false) {
                 return res.status(400).send('as senhas não estão iguais')
            } 
     
            if(authPasswords == true) {
                const userExists = await validator.validateIfUserExists(email);

                if(userExists==false) {
                    await Crud.createUser(nameUser, email, password);
                    return res.status(200).send('usuário criado');
                } else {
                    return res.status(400).send('usuário já existente');
                }
            }
         }
    
    return res.status(400).send('Erro ao registrar');
}



module.exports = {
    GetInputValuesFromForm,
}

