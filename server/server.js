const http = require("http");
require("dotenv").config();

const { insertOrUpdateArticles } = require("./routes/blog/blog.controller");

const port = process.env.PORT || 8000;

const app = require("./app");

const server = http.createServer(app);

async function startServer() {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  await insertOrUpdateArticles();
}

startServer();
