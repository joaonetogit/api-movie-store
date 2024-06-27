import Product from "../models/product.js";
import normalizeTitle from "../utils/normalizeText.js";

export async function getAll(req, res) {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).send("Error fetching products");
  }
}

export async function getOneByTitle(req, res) {
  const { title } = req.params;
  const titleToSearch = normalizeTitle(title);

  try {
    const products = await Product.find();

    const product = products.find(
      (product) => normalizeTitle(product.title) === titleToSearch,
    );

    if (product) {
      return res.json(product);
    } else {
      return res.status(404).send("Product not found");
    }
  } catch (err) {
    return res.status(500).send("Error fetching product");
  }
}

export async function getProductsByCategory(req, res) {
  const { category } = req.params;
  const categoryToSearch = normalizeTitle(category);

  try {
    const products = await Product.find();

    const filteredProducts = products.find(
      (product) => normalizeTitle(product.category) === categoryToSearch,
    );

    if (filteredProducts) {
      return res.json(filteredProducts);
    } else {
      return res.status(404).send("No products found for this categoryd");
    }
  } catch (err) {
    return res.status(500).send("Error fetching products");
  }
}

export async function newProduct(req, res) {
  try {
    const product = req.body;
    const newProduct = await Product.create(product);
    return res.status(201).json(newProduct);
  } catch (err) {
    return res.status(500).send("Error creating product");
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const productToDelete = await Product.findById(id);

    if (!productToDelete) {
      return res.status(404).send("Product not found");
    }

    await productToDelete.deleteOne();

    return res.status(200).send("Product deleted successfully");
  } catch (err) {
    return res.status(500).send("Error deleting product");
  }
}
