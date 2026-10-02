console.log("HOSTINGER STDIN PROBE START");

console.log("Before process.stdin");

const stdin = process.stdin;

console.log("After process.stdin");
console.log("stdin exists:", !!stdin);

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("HOSTINGER STDIN PROBE OK");
});

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`Listening on port ${port}`);
});
