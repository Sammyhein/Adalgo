/* Write a function named passwd_validator that takes a string as argument.

 It will return True if the string is a valid password; False otherwise.
 A valid password has the following characteristics:

 it has between 6 and 12 characters (included)
 it has at least one lowercase character
  it has at least one uppercase character
 it has at least one decimal number
 it has at least one special character: $, # or @
 Examples
 This: passwd_validator("l#H1@")
 Will return: False (because there are less than 6 characters)
 This: passwd_validator("el3H1@f")
 Will return: True

 This: passwd_validator("fwjifewJ#")
 Will return: False (because there's no decimal numbers) */

export const passwd_validator = (passwd : string) => {
    // let nbLetters = 0
    // let nbLowerCase = 0
    // let nbUpperCase = 0
    // let nbFullNumber = 0
    // let nbSpecialCharacter = 0

    // let splitPasswd = passwd.split('')

    // for(let i=0; i<splitPasswd.length; i++){
    //     nbLetters+= 1
    //     if(splitPasswd[i] === splitPasswd[i].toLowerCase())nbLowerCase+=1
    //     if(splitPasswd[i]===splitPasswd[i].toLocaleUpperCase())nbUpperCase+=1
    //     if(!isNaN(Number(splitPasswd[i])))nbFullNumber+=1
    //     if(splitPasswd[i] === "$" || splitPasswd[i] === "#" || splitPasswd[i] === "@" ) nbSpecialCharacter += 1
    // }

    // if(nbLetters>=6 && nbLowerCase>0 && nbUpperCase>0 && nbFullNumber>0 && nbSpecialCharacter>0) return true
    // else return false
    // return(`il y a ${nbLetters} lettres, ${nbLowerCase} lettre en minuscule, ${nbUpperCase} majuscule, ${nbFullNumber} nombre entier, ${nbSpecialCharacter} caractère spéciaux`)

    //METHODE REGEX
    if(passwd.length < 6 || passwd.length > 12)return false
    if (!/[a-z]/.test(passwd)) return false;
    if (!/[A-Z]/.test(passwd)) return false;
    if (!/[0-9]/.test(passwd)) return false;
    if (!/[$#@]/.test(passwd)) return false;
    return true;
};