const Users = require('../../db/db');

const validateIfInputIsEmpty = (nameUser, email, password, confirmPassword) => {
    let auth = false;

    if(nameUser=='' || email=='' || password=='' || confirmPassword=='') {
        return auth;
    } 
    return auth = true;
}

const validatePasswordsEquality = (password, confirmPassword) => {
    let auth = false

    if(password !== confirmPassword) {
        return auth 
    }

    return auth = true;
}

const validateIfUserExists = async (email) => {
    let userExists = false;
    const getUserInDB = await Users.find({email: email});
    
    if (getUserInDB.length > 0) {
        userExists = true;
    }

    return userExists;
}


module.exports = {
    validateIfInputIsEmpty,
    validatePasswordsEquality,
    validateIfUserExists
}