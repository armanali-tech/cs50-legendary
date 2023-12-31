const path = require("path");
const next = require("next");
const express = require("express");
const compression = require("compression");
const helmet = require("helmet");

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.use(express.static("public"));

  server.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
  server.use(compression());

  const staticPath = path.join(__dirname, "../static");
  server.use(
    "/static",
    express.static(staticPath, {
      maxAge: "30d",
      immutable: true,
    })
  );

  server.get("*", (req, res) => {
    return handler(req, res);
  });

  startServer();

  function startServer() {
    server.listen(port, () => {
      console.log(`:> Ready on http://localhost:${port}`);
    });
  }
});
