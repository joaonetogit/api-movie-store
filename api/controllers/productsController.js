const products = require("../data/products");
const normalizeTitle = require("../utils/normalizeText");

exports.getAll = (req, res) => {
  res.json({ products });
};

exports.getOneByTitle = (req, res) => {
  const { title } = req.params;
  const normalizedTitle = normalizeTitle(title);

  const product = products.find(
    (item) => normalizeTitle(item.title) === normalizedTitle,
  );
  product ? res.json(product) : res.status(404).send("Product not found");
};

exports.getProductsByCategory = (req, res) => {
  const { category } = req.params;
  const normalizedCategory = normalizeTitle(category);

  const filteredProducts = products.filter(
    (item) => normalizeTitle(item.category) === normalizedCategory,
  );

  filteredProducts.length > 0
    ? res.json({ products: filteredProducts })
    : res.status(404).send("No products found for this category");
};
