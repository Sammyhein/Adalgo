// This function takes a message as parameter and replaces all occurences of "pain au chocolat" by "chocolatine".

// This would work with "pains au chocolat" and "chocolatines" as well and when we see "un pain au chocolat" it should be replaced by "une chocolatine".

// @param {string} message The message in which the text should be replaced
// @returns {string} an updated message with every "pain au chocolat" replaced by "chocolatine"

export const chocolatine = (message : string) => {
    const messageSplitPain = message.split("pain au chocolat")
    const messageSplitUnPain = message.split("un pain au chocolat")
    const messageSplitPains = message.split("pains au chocolat")
    const messageSplitChocolatine = message.split("chocolatine")
    const messageSplitUneChocolatine = message.split("une chocolatine")
    const messageSplitChocolatines = message.split("chocolatines")

    if(messageSplitUnPain.length > 1) return message.replaceAll("un pain au chocolat", "une chocolatine")

    if(messageSplitPain.length > 1) return message.replaceAll("pain au chocolat", "chocolatine")

    if(messageSplitPains.length > 1) return message.replaceAll("pains au chocolat", "chocolatines")

    if(messageSplitUneChocolatine.length > 1) return message.replaceAll("une chocolatine", "un pain au chocolat")

    if(messageSplitChocolatine.length > 1) return message.replaceAll("chocolatine", "pain au chocolat")

    if(messageSplitChocolatines.length > 1) return message.replaceAll("chocolatines", "pains au chocolat")


    if(messageSplitPain.length === 1 || messageSplitPains.length === 1 || messageSplitChocolatine.length === 1 || messageSplitChocolatines.length === 1) return message


};