import { test, expect } from "vitest";
import { analyze_text } from "../functions/12-analyze_text"

// TODO : test analyze_text.js
test('testing a simple sentence', () =>{
    expect(analyze_text("Hello world.")).toStrictEqual({ letters: 10, words: 2, sentences: 1 })
})

test('testing sentences with a question',()=>{
    expect(analyze_text("Hello world. How are you?")).toStrictEqual({ letters: 19, words: 5, sentences: 2 })
}) 

test('if there is nothing', ()=>{
    expect(analyze_text('')).toStrictEqual({ letters: 0, words: 0, sentences: 0 })
})