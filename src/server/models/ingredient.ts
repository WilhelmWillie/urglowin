import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  name: String,
  scientificName: String,
  type: String,
  tldr: [String],
  description: String,
  sourceUrl: String,
});

const ingredientModel = mongoose.model("Ingredient", ingredientSchema);

export default ingredientModel;