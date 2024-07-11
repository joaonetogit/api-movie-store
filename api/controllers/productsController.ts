import { Request, Response } from 'express';
import ProductModel from '../models/product.js';
import normalizeTitle from '../utils/normalizeText.js';

export async function getAll(req: Request, res: Response) {
  try {
    const products = await ProductModel.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).send('Error fetching products');
  }
}

export async function getOneByTitle(req: Request, res: Response) {
  const { title } = req.params;
  const titleToSearch = normalizeTitle(title);

  try {
    const products = await ProductModel.find();

    const foundProduct = products.find(p => normalizeTitle(p.title) === titleToSearch);

    if (foundProduct) {
      return res.json(foundProduct);
    }
    return res.status(404).send('Product not found');
  } catch (err) {
    return res.status(500).send('Error fetching product');
  }
}

export async function getProductsByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const categoryToSearch = normalizeTitle(category);

  try {
    const products = await ProductModel.find();

    const filteredProducts = products.filter(p => normalizeTitle(p.category) === categoryToSearch);

    if (filteredProducts.length > 0) {
      return res.json(filteredProducts);
    }
    return res.status(404).send('No products found for this category');
  } catch (err) {
    return res.status(500).send('Error fetching products');
  }
}

export async function addProduct(req: Request, res: Response) {
  try {
    const productData = req.body;
    const createdProduct = await ProductModel.create(productData);
    return res.status(201).json(createdProduct);
  } catch (err) {
    return res.status(500).send('Error creating product');
  }
}

export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const productToDelete = await ProductModel.findById(id);

    if (!productToDelete) {
      return res.status(404).send('Product not found');
    }

    await productToDelete.deleteOne();

    return res.status(200).send('Product deleted successfully');
  } catch (err) {
    return res.status(500).send('Error deleting product');
  }
}

export async function updateProduct(req: Request, res: Response) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const productToUpdate = await ProductModel.findById(id);

    if (!productToUpdate) {
      return res.status(404).send('Product not found');
    }

    Object.keys(updateData).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(updateData, key)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (productToUpdate as any)[key] = updateData[key];
      }
    });

    await productToUpdate.save();

    return res.status(200).json(productToUpdate);
  } catch (err) {
    return res.status(500).send('Error updating product');
  }
}
