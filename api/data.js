const { v4: uuidv4 } = require("uuid");

const URL = "https://images-movie-store.s3.sa-east-1.amazonaws.com";

const products = [
  {
    id: uuidv4(),
    new: true,
    title: "Viúva Negra",
    price: 39.99,
    priceWithDiscount: null,
    image: `${URL}/viuva-negra.png`,
    quantityAvailable: 10,
    description:
      "Natasha Romanoff, também conhecida como Viúva Negra, confronta o lado mais sombrio de sua história quando surge uma perigosa conspiração ligada ao seu passado. Perseguida por uma força que não irá parar até derrotá-la, Natasha deve lidar com sua história como espiã e as relações quebradas que deixou quando se tornou uma Vingadora.",
    durationFilm: 134,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Shang-Chi",
    price: 31.99,
    priceWithDiscount: 22.99,
    image: `${URL}/shang-chi.png`,
    quantityAvailable: 7,
    description:
      "Shang-Chi é um jovem chinês criado por seu pai em reclusão, sendo treinado em artes marciais. Quando ele tem a chance de entrar em contato com o resto do mundo, logo percebe que seu pai não é o humanitário que dizia ser, vendo-se obrigado a se rebelar.",
    durationFilm: 132,
  },
  {
    id: uuidv4(),
    new: true,
    title: "Homem Aranha",
    price: 19.99,
    priceWithDiscount: null,
    image: `${URL}/spider-man.png`,
    quantityAvailable: 5,
    description:
      "Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heróica, ele precisa enfrentar vários vilões que surgem em cidades-símbolo do continente, como Londres, Paris e Veneza, e também a aparição do enigmático Mysterio.",
    durationFilm: 129,
  },
  {
    id: uuidv4(),
    new: true,
    title: "Morbius",
    price: 51.99,
    priceWithDiscount: null,
    image: `${URL}/morbius.png`,
    quantityAvailable: 15,
    description:
      "O cientista Michael Morbius tenta salvar-se de uma rara doença no sangue, mas acaba infectando-se com uma forma de vampirismo.",
    durationFilm: 104,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Batman",
    price: 60.99,
    priceWithDiscount: 42.99,
    image: `${URL}/batman.png`,
    quantityAvailable: 25,
    description:
      "Batman é um super-herói da DC Comics, criado por Bob Kane e Bill Finger. Sua primeira aparição foi em Detective Comics #27, em 1939.",
    durationFilm: 120,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Eternos",
    price: 22.99,
    priceWithDiscount: null,
    image: `${URL}/eternals.png`,
    quantityAvailable: 31,
    description:
      "Os Eternos, uma raça imortal de seres superpoderosos, vivem na Terra em segredo, protegendo a humanidade de ameaças impensáveis.",
    durationFilm: 156,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Vingadores",
    price: 109.99,
    priceWithDiscount: null,
    image: `${URL}/avengers.png`,
    quantityAvailable: 19,
    description:
      "Os Vingadores são uma equipe de super-heróis de histórias em quadrinhos publicadas nos Estados Unidos pela editora Marvel Comics.",
    durationFilm: 124,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Avatar",
    price: 19.99,
    priceWithDiscount: null,
    image: `${URL}/avatar.png`,
    quantityAvailable: 14,
    description:
      "Avatar é um filme épico de ficção científica estadunidense de 2009, escrito e dirigido por James Cameron, e estrelado por Sam Worthington, Zoë Saldaña, Sigourney Weaver e Stephen Lang.",
    durationFilm: 219,
  },
  {
    id: uuidv4(),
    new: false,
    title: "Hannibal",
    price: 93.39,
    priceWithDiscount: null,
    image: `${URL}/hannibal.png`,
    quantityAvailable: 21,
    description:
      "Hannibal Lecter é um personagem fictício e protagonista da série de livros de suspense escrita por Thomas Harris.",
    durationFilm: 120,
  },
];

module.exports = products;
