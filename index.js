const express = require("express");
const http = require("http");
const app = express();
require ("dotenv").config();
app.use(express.json());
const server = http.createServer(app);
//Añadimos estas dos lineas para la conexion
const router = require("./routes/index");
app.use(router);
//
const port = process.env.PORT || 3000;

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server running on port ${port}`);
});

module.exports = app;
