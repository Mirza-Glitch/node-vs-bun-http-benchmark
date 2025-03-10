import { toWebHandler, createApp, defineEventHandler, createRouter } from "h3";

export const app = createApp();

// Create a new router and register it in app
const router = createRouter();
app.use(router);

// Add a new route that matches GET requests to / path
router.get(
  "/",
  defineEventHandler((event) => {
    return { message: "⚡️ Tadaa!" };
  })
);

Bun.serve({
  port: 3000,
  fetch: toWebHandler(app),
});
