import { expect, test } from "vitest";
import { simple } from "../functions/0-simple";

test("Check if the simple function works", () => {
    expect(simple()).toBe(`J'❤️ les tests`);
});