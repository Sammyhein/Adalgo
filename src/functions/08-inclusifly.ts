/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 * @param {string} text
 */

export const inclusify = (text : string) => {
    const words : string[] = text.split(' ')
    let result=''

    for( let i=0 ; i < words.length ; i++){
        if(words[i] === 'il'){
            result += 'iel'
        } else if(words[i] === 'elle'){
            result += 'iel'
        } else if(words[i] === 'Il'){
            result += 'Iel'
        } else if(words[i] === 'Elle'){
            result+='Iel'
        } else if(words[i] === 'ils'){
            result+='iels'
        } else if(words[i] === 'elles'){
            result+='iels'
        }else if(words[i] === 'Ils'){
            result+='Iels'
        }else if(words[i] === 'Elles'){
            result += 'Iels'
        }else if(words[i] === 'celui'){
            result += 'celleux'
        }else if(words[i] === 'Celui'){
            result += 'Celleux'
        }else if(words[i] === 'celle'){
            result += 'celleux'
        }else if(words[i] === 'celles'){
            result += 'celleux'
        }else if(words[i] === 'ceux'){
            result += 'celleux'
        }else if(words[i] === 'Ceux'){
            result += 'Celleux'
        } else if(words[i] === 'Celles'){
            result += 'Celleux'
        }else{
            result += words[i]
        }

        if(i !== words.length - 1){
            result += ' '
        }
            
    }
    return result

};