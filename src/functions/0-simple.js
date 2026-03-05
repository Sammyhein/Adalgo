// Simple example to see how tests work.
// @returns {string}

export const simple = () => `J'❤️ les tests`;

let mot = "coucouines"
let splitWord =mot.split('ines')
splitWord.push("coucou")

console.log(mot + "coucou")

let phrase = "pains au chocolat"

phrase.includes("au")

console.log(mot*2)

const obj = {a: 1, b: 2}

console.log(Object.entries(obj))

// for(let i=0; i < phrase.length; i++){
//     console.log(phrase[i])
// }

let objet = {
        letters: 0,
        words: 0,
        sentences: 0
    }

objet.letters +=1

console.log(objet)