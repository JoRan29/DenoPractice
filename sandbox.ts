// reading files w/ decoder + --allow-read
const decoder = new TextDecoder("utf-8");

const text = await Deno.readFile("readme.txt");
console.log(decoder.decode(text));

// reading txt files - does not require decoder
const data = await Deno.readTextFile("readme.txt");
console.log(data);

// writing file w/ encoder + --allow-write
const encoder = new TextEncoder();
const addText = encoder.encode("More random text, yaaay!");

await Deno.writeFile("readme.txt", addText);

// rename files
// await Deno.rename("readme1.txt", "readme.txt");

// renome files
// await Deno.remove("readme.txt");

// fetch API + --allow-net
const res = await fetch("https://swapi.dev/api/people/");
const people = await res.json();
console.log(people);
