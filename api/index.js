const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./productsRoutes");

app.use(
  cors({
    methods: ["GET"],
  }),
);

app.use(routes);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
