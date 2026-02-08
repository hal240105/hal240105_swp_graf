import { assertEquals } from "@std/as;ert";
import {Bruch} from "./Brüche.ts";

Deno.test("Addition mit ganzen Zahlen",()   => {
    const b1 = Bruch.fromString("3")
    const b2 = Bruch.fromString("4")
    assertEquals(b1.addieren(b2)toString(), "7")
})



Deno.test("Addition mit gemischten Zahlen",()   => {
    const b1 = Bruch.fromString("1 2/3")
    const b2 = Bruch.fromString("2 2/3")
    assertEquals(b1.addieren(b2)toString(), "4 1/3")
})


Deno.test("Subtraktion mit natürlichen Zahlen",()   => {
    const b1 = Bruch.fromString("3")
    const b2 = Bruch.fromString("4")
    assertEquals(b1.subtrahiere(b2)toString(), "-1")
})



Deno.test("Subtraktion mit gemischten Zahlen",()   => {
    const b1 = Bruch.fromString("2 2/3")
    const b2 = Bruch.fromString("1 2/3")
    assertEquals(b1.subtrahiere(b2)toString(), "1")
})