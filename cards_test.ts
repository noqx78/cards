import { assertEquals } from "@std/assert";
import { hello } from "./cards.ts";
import { Card, colorValues, color } from "./cards.ts";

Deno.test("hello world", () => {
  assertEquals(hello(), "world");
});

Deno.test("aufgabe 1 - Test 1", () => {
  const card1 = new Card();
  const card2 = new Card();

  card1.value = colorValues.Ass;
  card1.color = color.Schilten

  card2.value = colorValues.Ass;
  card2.color = color.Schellen

  assertEquals(card1.beats(card2), false);
})

Deno.test("aufgabe 1 - Test 2", () => {
  const card1 = new Card();
  const card2 = new Card();

  card1.value = colorValues.Ober;
  card1.color = color.Eicheln

  card2.value = colorValues.Acht;
  card2.color = color.Schellen

  assertEquals(card1.beats(card2), true);
})

Deno.test("aufgabe 1 - Test 3", () => {
  const card1 = new Card();
  const card2 = new Card();

  card1.value = colorValues.Banner;
  card1.color = color.Rosen

  card2.value = colorValues.Banner;
  card2.color = color.Rosen

  assertEquals(card1.beats(card2), false);
})
