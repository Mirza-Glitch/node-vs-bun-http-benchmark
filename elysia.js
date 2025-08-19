import { Elysia } from "elysia";
import { createServer } from "http";

const app = new Elysia().get("/", () => "Hello World");

// Create Node.js HTTP server using Elysia's fetch handler
const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
  });

  try {
    const response = await app.fetch(request);

    res.statusCode = response.status;

    // Set headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response body
    const body = await response.text();
    res.end(body);
  } catch (error) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(3000, () => {
  console.log(`🦊 Elysia server running at http://localhost:3000`);
});
