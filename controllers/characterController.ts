import { Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import { Char } from "../models/charModel.ts";

let chars: Char[] = [
  {
    name: "Harry",
    house: "Gryffindor",
    patronus: "Stag",
  },
  {
    name: "Hermione",
    house: "Gryffindor",
    patronus: "Otter",
  },
  {
    name: "Minerva",
    house: "Gryffindor",
    patronus: "Cat",
  },
];

export const get_all_chars = (ctx: Context) => {
  return ctx.json(chars, 200);
};

export const get_char = (ctx: Context) => {
  const { name } = ctx.params;
  const char = chars.find((ch: Char) => ch.name === name);
  if (char) {
    return ctx.json(char, 200);
  }
  return ctx.string("No character with that name!", 404);
};

export const create_char = async (ctx: Context) => {
  const { name, house, patronus } = await ctx.body();
  // validate data types and data here
  const char = { name, house, patronus };
  chars.push(char);
  return ctx.json(char, 201);
};

export const delete_char = (ctx: Context) => {
  const { name } = ctx.params;
  const char = chars.find((ch: Char) => ch.name === name);
  if (char) {
    chars = chars.filter((ch: Char) => ch.name !== name);
    return ctx.json(char, 200);
  }
  return ctx.string("No character with that name!", 404);
};
