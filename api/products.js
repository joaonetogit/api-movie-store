const express = require("express");
const app = express();
const path = require("path");

app.use("/public", express.static(path.join(__dirname, "../public")));

const products = [
  {
    id: 1,
    title: "Viúva Negra",
    price: 9.99,
    image: "/public/viuva-negra.png",
  },
  {
    id: 2,
    title: "Shang-Chi",
    price: 30.99,
    image: "/public/shang-chi.png",
  },
  {
    id: 3,
    title: "Homem Aranha",
    price: 29.99,
    image: "/public/spider-man.png",
  },
  {
    id: 5,
    title: "Morbius",
    price: 9.99,
    image: "/public/morbius.png",
  },
  {
    id: 6,
    title: "Batman",
    price: 30.99,
    image: "/public/batman.png",
  },
  {
    id: 4,
    title: "Eternos",
    price: 29.99,
    image: "/public/eternals.png",
  },
];

app.get("/api/products", (req, res) => {
  res.json({ products });
});

module.exports = app;
