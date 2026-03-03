// TODO: test arrayToFrench function with one, two and multiple words
import { test , expect } from "vitest";
import { arrayToFrench } from "../functions/05-arrayToFrench";

test("add 'et' between the last two words",() =>{
    expect(arrayToFrench(['noir', 'blanc'])).toBe("noir et blanc")
})

test("add a comma bewteen each letter if they are not the two last words", () =>{
    expect(arrayToFrench(['un', 'deux', 'trois', 'soleil'])).toBe("un, deux, trois et soleil")
})