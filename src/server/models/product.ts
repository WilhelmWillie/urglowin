import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  brand: String,
  productName: String,
  category: String,
  usedFor: [String],
  ingredientsUrl: String,
  regularPrice: Number,
  description: String,
  instructions: String,
  fullIngredientList: [String],
  imageUrl: String,
  size: Number,
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;