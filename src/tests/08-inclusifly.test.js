import {inclusify} from "../functions/08-inclusifly";
import {expect, test} from "vitest";

test("il/elle are properly replaced", () => {
    expect(inclusify("Aujourd'hui elle a push le code sur github")).toBe("Aujourd'hui iel a push le code sur github");
    expect(inclusify("Il a bu un café")).toBe("Iel a bu un café");
    expect(inclusify("Il a mangé tout les chocolats et elles ont été en racheter.")).toBe(
        "Iel a mangé tout les chocolats et iels ont été en racheter."
    );
    expect(inclusify("Ils se sont mis du mascara sur les cils")).toBe("Iels se sont mis du mascara sur les cils");
    expect(inclusify("Il est venu, il a vu, il a vaincu")).toBe("Iel est venu, iel a vu, iel a vaincu");
    expect(inclusify("Elle est allé sur l'île.")).toBe("Iel est allé sur l'île.");
});

test("already inclusified sentences should change", () => {
    expect(inclusify("Aujourd'hui iel a push le code sur github")).toBe("Aujourd'hui iel a push le code sur github");
    expect(inclusify("Iel a bu un café")).toBe("Iel a bu un café");
});

// TODO: write similar tests celleux

test('ceux/celle are properly replaced', () =>{
    expect(inclusify("Aujourd'hui celle qui a push le code sur github est un élève")).toBe("Aujourd'hui celleux qui a push le code sur github est un élève");
    expect(inclusify("Les apprenants sont ceux qui apprennent le code")).toBe("Les apprenants sont celleux qui apprennent le code");
    expect(inclusify('Celui qui a voté, se présente.')).toBe('Celleux qui a voté, se présente.');
    expect(inclusify('Bonjour à celui qui est venu ce matin')).toBe('Bonjour à celleux qui est venu ce matin');
    expect(inclusify("Celles qui ont discuté à ceux qui on fait la cuisine, allez prévenir à celui qui s'occupe de l'organisation")).toBe("Celleux qui ont discuté à celleux qui on fait la cuisine, allez prévenir à celleux qui s'occupe de l'organisation")
})