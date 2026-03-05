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