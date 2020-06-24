// uuid module - generates random id
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

// fs module - currently needs --unstable flag
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonChar = await readJson("example.json");
console.log(jsonChar);

const characters = [
  { "name": "Colin", "house": "Gryffindor", "patronus": "Mouse" },
  { "name": "Ron", "house": "Gryffindor", "patronus": "Terrier" },
];

// making a new json file - third argument formats the json file
// await writeJson("characters.json", characters, { spaces: 2 });
// console.log("Created new json file!");

//  http module - creating server - needs allow-net flag
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3000 });
console.log("listening to port 3000");

for await (const req of server) {
  console.log("request made!");
  const url = req.url;
  req.respond({ body: `Hello World! You are visiting ${url}!` });
}
