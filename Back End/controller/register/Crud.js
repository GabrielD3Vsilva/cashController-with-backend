const {Users} = require('../../db/db');

const createUser = async (nameUser, email, password) => {

    try {
        const aNewUser = await Users.create(
            {
                nameUser: nameUser,
                email: email,
                password: password
            }
        );
    }  catch (error) {
        console.log('erro ao criar usuário',error);
    }

}

module.exports = {
    createUser
}