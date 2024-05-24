const Users = require('../../db/db');

const validateIfInputIsEmpty = (email, password) => {
    let  empty = false;

    if(email == '' || password == '') {
        empty = true;
    } 

    return empty
    
}


const validateIfUserExists = async (email, password) => {
    let userExists = false;
    const getUserInDB = await Users.find({email: email, password: password});
    
    if (getUserInDB.length > 0) {
        userExists = true;
    }

    return userExists;
}


module.exports = {
    validateIfInputIsEmpty,
    validateIfUserExists
}