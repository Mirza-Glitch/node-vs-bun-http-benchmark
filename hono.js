import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hono!"));

serve({ fetch: app.fetch, port: 3000 });
