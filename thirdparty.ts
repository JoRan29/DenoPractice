// case - third party deno module
import {
  camelCase,
  paramCase,
  pascalCase,
  snakeCase,
} from "https://deno.land/x/case/mod.ts";

const text = "This is an interesting text!";

const camel = camelCase(text);
const param = paramCase(text);
const pascal = pascalCase(text);
const snake = snakeCase(text);

console.log(camel, param, pascal, snake);

// catYou
import { catYou } from "https://deno.land/x/cat_you/mod.ts";

console.log(catYou());
console.log(catYou("grumpy"));

// abc - API
import {
  Application,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

const app = new Application();

// routes
app.get("/", async (ctx: Context) => {
  console.log("request made!");
  await ctx.file("./public/index.html");
});

// listen to port
app.start({ port: 3000 });
