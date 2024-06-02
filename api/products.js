const express = require("express");
const app = express();

const URL = "https://images-movie-store.s3.sa-east-1.amazonaws.com";

const products = [
  {
    id: 1,
    title: "Viúva Negra",
    price: 39.99,
    image: `${URL}/viuva-negra.png`,
  },
  {
    id: 2,
    title: "Shang-Chi",
    price: 31.99,
    image: `${URL}/shang-chi.png`,
  },
  {
    id: 3,
    title: "Homem Aranha",
    price: 19.99,
    image: `${URL}/spider-man.png`,
  },
  {
    id: 5,
    title: "Morbius",
    price: 5.99,
    image: `${URL}/morbius.png`,
  },
  {
    id: 6,
    title: "Batman",
    price: 60.99,
    image: `${URL}/batman.png`,
  },
  {
    id: 4,
    title: "Eternos",
    price: 22.99,
    image: `${URL}/eternals.png`,
  },
];

app.get("/api/products", (req, res) => {
  res.json({ products });
});

module.exports = app;
