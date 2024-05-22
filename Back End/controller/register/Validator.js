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



module.exports = {
    validateIfInputIsEmpty,
    validatePasswordsEquality
}