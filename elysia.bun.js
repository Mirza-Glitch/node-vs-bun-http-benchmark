import { Elysia, t } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello World");

app.listen(3000);

console.log(`🦊 Elysia server running at http://localhost:3000`);
