const { v4: uuidv4 } = require("uuid");

const URL = "https://images-movie-store.s3.sa-east-1.amazonaws.com";

const products = [
  {
    id: uuidv4(),
    new: true,
    title: "Viúva Negra",
    price: 39.99,
    image: `${URL}/viuva-negra.png`,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Shang-Chi",
    price: 31.99,
    image: `${URL}/shang-chi.png`,
  },
  {
    id: uuidv4(),
    new: true,
    title: "Homem Aranha",
    price: 19.99,
    image: `${URL}/spider-man.png`,
  },
  {
    id: uuidv4(),
    new: true,
    title: "Morbius",
    price: 5.99,
    image: `${URL}/morbius.png`,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Batman",
    price: 60.99,
    image: `${URL}/batman.png`,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Eternos",
    price: 22.99,
    image: `${URL}/eternals.png`,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Vingadores",
    price: 109.99,
    image: `${URL}/avengers.png`,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Avatar",
    price: 19.99,
    image: `${URL}/avatar.png`,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Hannibal",
    price: 93.39,
    image: `${URL}/hannibal.png`,
  },
];

module.exports = products;
