const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const port = process.env.PORT || 3001;

app.use(
  cors({
    methods: ["GET"],
  }),
);

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
