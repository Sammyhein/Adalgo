/*
This function modifies a given word based on its ending.

If the word does not end with "ing",
the function should add "ing" to the end of the word.

If the word already ends with "ing",
the function should add "ly" instead.

The function should return the updated word.

For example:

ingly("play") => return "playing"

ingly("playing") => return "playingly"

ingly("swim") => return "swiming"
*/

export const ingly = (word : string) => {
    const wordSplitING = word.toLowerCase().split("ing")

    if (word === "") return "ing";
    
    const endsWithING = wordSplitING[wordSplitING.length - 1] === "";
    const isUpperCase = word === word.toUpperCase()

    if(!endsWithING){
        return word + (isUpperCase ? "ING" : "ing")
    }else{
        return word + (isUpperCase ? "LY" : "ly")
    }
};