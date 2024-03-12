import { isValidUsername, useStrongPassword } from '6pp'


export const usernameValidator = (username) => {

    if(!isValidUsername(username)){
        return { isValid: false, errorMessage: "Username is not valid" }
    }
};

export const passwordValidator = (password) => {

if(!useStrongPassword(password)){
    return { isValid: false, errorMessage: "Password should contain, a lowercase character, an uppercase character, a special character, a number." }
}
};
