import ProductModel from '../models/product.js';
import httpStatusCodes from '../utils/httpStatusCodes.js';
import normalizeTitle from '../utils/normalizeText.js';

async function getAll(req, res) {
  try {
    const products = await ProductModel.find();
    return res.status(httpStatusCodes.OK).json(products);
  } catch (err) {
    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send('Error fetching products');
  }
}
async function getOneByTitle(req, res) {
  const { title } = req.params;
  const titleToSearch = normalizeTitle(title);
  try {
    const products = await ProductModel.find();
    const foundProduct = products.find(p => normalizeTitle(p.title) === titleToSearch);
    if (!foundProduct) {
      return res.status(httpStatusCodes.NOT_FOUND).send('Product not found');
    }
    return res.json(foundProduct);
  } catch (err) {
    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send('Error fetching product');
  }
}
async function getProductsByCategory(req, res) {
  const { category } = req.params;
  const categoryToSearch = normalizeTitle(category);
  try {
    const products = await ProductModel.find();
    const filteredProducts = products.filter(p => normalizeTitle(p.category) === categoryToSearch);
    if (filteredProducts.length > 0) {
      return res.json(filteredProducts);
    }
    return res.status(httpStatusCodes.NOT_FOUND).send('No products found for this category');
  } catch (err) {
    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send('Error fetching products');
  }
}
async function addProduct(req, res) {
  try {
    const productData = req.body;
    const createdProduct = await ProductModel.create(productData);
    return res.status(httpStatusCodes.OK).json(createdProduct);
  } catch (err) {
    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send('Error creating product');
  }
}
async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const productToDelete = await ProductModel.findById(id);
    if (!productToDelete) {
      return res.status(httpStatusCodes.NOT_FOUND).send('Product not found');
    }
    await productToDelete.deleteOne();
    return res.status(httpStatusCodes.OK).send('Product deleted successfully');
  } catch (err) {
    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send('Error deleting product');
  }
}
async function updateProduct(req, res) {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const productToUpdate = await ProductModel.findById(id);
    if (!productToUpdate) {
      return res.status(httpStatusCodes.NOT_FOUND).send('Product not found');
    }
    Object.keys(updateData).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(updateData, key)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        productToUpdate[key] = updateData[key];
      }
    });
    await productToUpdate.save();
    return res.status(httpStatusCodes.OK).json(productToUpdate);
  } catch (err) {
    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send('Error updating product');
  }
}
export { addProduct, deleteProduct, getAll, getOneByTitle, getProductsByCategory, updateProduct };
