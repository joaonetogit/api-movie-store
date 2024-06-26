require("dotenv").config();

const URL = process.env.BASE_URL;

if (!URL) {
  throw new Error("BASE_URL is not defined in the environment variables");
}

const extensionArchive = ".webp";

const products = [
  {
    id: "prod-1",
    createdAt: "2024-05-11T11:24:59Z",
    title: "Black Widow",
    price: 39.99,
    priceWithDiscount: null,
    image: `${URL}/viuva-negra${extensionArchive}`,
    quantityAvailable: 10,
    description:
      "Natasha Romanoff, also known as Black Widow, confronts the darkest parts of her history when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
    durationFilm: 134,
    category: "Action",
    director: "Cate Shortland",
  },
  {
    id: "prod-2",
    createdAt: "2024-05-13T13:22:47Z",
    title: "Shang-Chi",
    price: 31.99,
    priceWithDiscount: 22.99,
    image: `${URL}/shang-chi${extensionArchive}`,
    quantityAvailable: 7,
    description:
      "Shang-Chi is a young Chinese man raised by his father in seclusion, being trained in martial arts. When he gets the chance to connect with the outside world, he quickly realizes that his father is not the humanitarian he claimed to be, and Shang-Chi is forced to rebel.",
    durationFilm: 132,
    category: "Action",
    director: "Destin Daniel Cretton",
  },
  {
    id: "prod-3",
    createdAt: "2024-05-15T09:18:34Z",
    title: "Spider-Man",
    price: 19.99,
    priceWithDiscount: null,
    image: `${URL}/spider-man${extensionArchive}`,
    quantityAvailable: 5,
    description:
      "Peter Parker is on a two-week trip to Europe with his high school friends when he is unexpectedly visited by Nick Fury. Summoned for another heroic mission, he must face several villains emerging in iconic cities across the continent, such as London, Paris, and Venice, as well as the appearance of the enigmatic Mysterio.",
    durationFilm: 129,
    category: "Action",
    director: "Jon Watts",
  },
  {
    id: "prod-4",
    createdAt: "2024-05-17T14:45:22Z",
    title: "Morbius",
    price: 51.99,
    priceWithDiscount: null,
    image: `${URL}/morbius${extensionArchive}`,
    quantityAvailable: 15,
    description:
      "Scientist Michael Morbius attempts to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.",
    durationFilm: 104,
    category: "Horror",
    director: "Daniel Espinosa",
  },
  {
    id: "prod-5",
    createdAt: "2024-05-19T10:22:11Z",
    title: "Batman",
    price: 60.99,
    priceWithDiscount: 42.99,
    image: `${URL}/batman${extensionArchive}`,
    quantityAvailable: 25,
    description:
      "Batman is a superhero from DC Comics, created by Bob Kane and Bill Finger. His first appearance was in Detective Comics #27 in 1939.",
    durationFilm: 120,
    category: "Action",
    director: "Matt Reeves",
  },
  {
    id: "prod-6",
    createdAt: "2024-05-21T08:37:45Z",
    title: "Eternals",
    price: 22.99,
    priceWithDiscount: null,
    image: `${URL}/eternals${extensionArchive}`,
    quantityAvailable: 31,
    description:
      "The Eternals, a race of immortal super-powered beings, have lived on Earth in secret, protecting humanity from unimaginable threats.",
    durationFilm: 156,
    category: "Action",
    director: "Chloé Zhao",
  },
  {
    id: "prod-7",
    createdAt: "2024-05-23T16:19:08Z",
    title: "Avengers",
    price: 109.99,
    priceWithDiscount: null,
    image: `${URL}/avengers${extensionArchive}`,
    quantityAvailable: 19,
    description:
      "The Avengers are a team of superheroes appearing in comic books published by Marvel Comics.",
    durationFilm: 124,
    category: "Action",
    director: "Joss Whedon",
  },
  {
    id: "prod-8",
    createdAt: "2024-05-25T12:00:00Z",
    title: "Avatar",
    price: 19.99,
    priceWithDiscount: null,
    image: `${URL}/avatar${extensionArchive}`,
    quantityAvailable: 14,
    description:
      "Avatar is a 2009 American epic science fiction film written and directed by James Cameron, starring Sam Worthington, Zoë Saldaña, Sigourney Weaver, and Stephen Lang.",
    durationFilm: 162,
    category: "Science Fiction",
    director: "James Cameron",
  },
  {
    id: "prod-9",
    createdAt: "2024-05-27T10:45:30Z",
    title: "Hannibal",
    price: 93.39,
    priceWithDiscount: null,
    image: `${URL}/hannibal${extensionArchive}`,
    quantityAvailable: 21,
    description:
      "Hannibal Lecter is a fictional character and the protagonist in a series of suspense novels by Thomas Harris.",
    durationFilm: 131,
    category: "Thriller",
    director: "Ridley Scott",
  },
  {
    id: "prod-10",
    createdAt: "2024-05-29T13:30:45Z",
    title: "Inception",
    price: 14.99,
    priceWithDiscount: 9.99,
    image: `${URL}/inception${extensionArchive}`,
    quantityAvailable: 30,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    durationFilm: 148,
    category: "Science Fiction",
    director: "Christopher Nolan",
  },
  {
    id: "prod-11",
    createdAt: "2024-05-31T08:00:00Z",
    title: "The Matrix",
    price: 12.99,
    priceWithDiscount: null,
    image: `${URL}/matrix${extensionArchive}`,
    quantityAvailable: 18,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    durationFilm: 136,
    category: "Science Fiction",
    director: "Lana Wachowski, Lilly Wachowski",
  },
  {
    id: "prod-12",
    createdAt: "2024-06-02T11:59:59Z",
    title: "The Godfather",
    price: 24.99,
    priceWithDiscount: 19.99,
    image: `${URL}/godfather${extensionArchive}`,
    quantityAvailable: 12,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    durationFilm: 175,
    category: "Crime",
    director: "Francis Ford Coppola",
  },
  {
    id: "prod-13",
    createdAt: "2024-06-04T09:15:25Z",
    title: "Jurassic Park",
    price: 19.99,
    priceWithDiscount: null,
    image: `${URL}/jurassic-park${extensionArchive}`,
    quantityAvailable: 22,
    description:
      "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    durationFilm: 127,
    category: "Science Fiction",
    director: "Steven Spielberg",
  },
  {
    id: "prod-14",
    createdAt: "2024-06-06T14:35:48Z",
    title: "Titanic",
    price: 15.99,
    priceWithDiscount: 12.99,
    image: `${URL}/titanic${extensionArchive}`,
    quantityAvailable: 27,
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    durationFilm: 195,
    category: "Romance",
    director: "James Cameron",
  },
  {
    id: "prod-15",
    createdAt: "2024-06-08T16:55:11Z",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    price: 29.99,
    priceWithDiscount: null,
    image: `${URL}/lotr-fellowship${extensionArchive}`,
    quantityAvailable: 17,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    durationFilm: 178,
    category: "Fantasy",
    director: "Peter Jackson",
  },
];

module.exports = products;
