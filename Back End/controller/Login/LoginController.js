const Validator = require('./Validator');

const getDataFromUser = async (req, res) => {
    const {email, password} = req.body;

    const empty = Validator.validateIfInputIsEmpty(email, password);

    if(empty == false) {
        const userExists = await Validator.validateIfUserExists(email, password);

        if(userExists == true) {
            return res.status(200).send('usuário conectado.')
        } else {
            return res.status(400).send('credenciais inválidas, tente novamente');
        }

    }

    return res.status(400).send('email ou senha não preenchidos');

    
}

module.exports = {
    getDataFromUser
}