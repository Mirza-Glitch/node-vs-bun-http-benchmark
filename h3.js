import { createServer } from "node:http";
import {
  toNodeListener,
  createApp,
  defineEventHandler,
  createRouter,
} from "h3";

const app = createApp();

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

createServer(toNodeListener(app)).listen(process.env.PORT || 3000);
