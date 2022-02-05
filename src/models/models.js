import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  created_date: {
    type: Date.now,
  },
});

export const Product = mongoose.model("Product", ProductSchema);
