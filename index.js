const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    title: "Viúva Negra",
    price: 9.99,
    image: "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png",
  },
  {
    id: 2,
    title: "Shang-Chi",
    price: 30.99,
    image: "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png",
  },
  {
    id: 3,
    title: "Homem Aranha",
    price: 29.99,
    image: "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png",
  },
  {
    id: 5,
    title: "Morbius",
    price: 9.99,
    image: "https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png",
  },
  {
    id: 6,
    title: "Batman",
    price: 30.99,
    image: "https://wefit-react-web-test.s3.amazonaws.com/the-batman.png",
  },
  {
    id: 4,
    title: "Eternos",
    price: 29.99,
    image: "https://wefit-react-web-test.s3.amazonaws.com/eternals.png",
  },
];

app.get("/products", (req, res) => {
  res.json({ products });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
