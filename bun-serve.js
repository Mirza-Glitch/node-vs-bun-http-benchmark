Bun.serve({
  fetch(req) {
    return new Response("Hello World!");
  },
  port: 3000,
});
