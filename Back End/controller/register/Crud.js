const Users = require('../../db/db');

const createUser = async (nameUser, email, password) => {
    const aNewUser = await Users.create(
        {
            nameUser: nameUser,
            email: email,
            password: password
        }
    );


    
}

module.exports = {
    createUser
}