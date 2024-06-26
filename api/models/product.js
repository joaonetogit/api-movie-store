import mongoose from "mongoose";
const { Schema } = mongoose;

import { v4 as uuidv4 } from "uuid";

const productSchema = new Schema({
  _id: { type: String, default: uuidv4(), required: true, immutable: true },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceWithDiscount: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  quantityAvailable: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  durationFilm: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Product", productSchema);
