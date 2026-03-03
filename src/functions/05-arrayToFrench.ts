// This function takes an array of words and convert it into a french sentence. Words are separated by commas and the two last words are separated by "et".

// @param {string[]} array array of words
// @returns {string}

// @example
//       arrayToFrench(['un', 'deux', 'trois', 'soleil']); // returns "un, deux, trois et soleil"
//       arrayToFrench(['noir', 'blanc']); // returns "noir et blanc"


export const arrayToFrench = (array: string[]) => {
    let result = []
    for(let i = 0 ; i < array.length ; i++){
        if(i !== array.length - 2 && i !== array.length - 1){
            result.push(array[i])
            result.push(", ")
        } else if(i === array.length - 2){
            result.push(array[i])
            result.push(" et ")
        } else if(i === array.length - 1){
            result.push(array[i])
        }
    }
    return result.join("")
};