const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

// Connect to database
mongoose.connect('mongodb://localhost/urglowin');

// Set up product and ingredient models
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

const ingredientSchema = new mongoose.Schema({
  name: String,
  scientificName: String,
  type: String,
  tldr: [String],
  description: String,
  sourceUrl: String,
});

const Product = mongoose.model("Product", productSchema);
const Ingredient = mongoose.model("Ingredient", ingredientSchema);

// Clear out products
async function clear() {
  await Product.deleteMany({}, ()=>{
    console.log("🗑 Product collection cleared")
  });
  
  await Ingredient.deleteMany({}, ()=>{
    console.log("🗑 Ingredient collection cleared")
  });
}

// Read products CSV and create entries
async function fillDatabase() {
  await clear();

  // Products
  fs.createReadStream(path.join(__dirname, "csv/products.csv"), "utf8")
    .pipe(csv())
    .on('data', (row) => {
      const product = new Product({
        brand: row.brand,
        productName: row.productName,
        category: row.category,
        usedFor: row.usedFor.split(', '),
        ingredientsUrl: row.ingredientsUrl,
        regularPrice: parseFloat(row.price),
        description: row.description,
        instructions: row.instructions,
        fullIngredientList: row.fullIngredientList.split(', '),
        imageUrl: row.img,
        size: parseInt(row.size)
      });

      product.save();

      console.log(`Saved ${row.productName} to product database`);
    });

  // Ingredients
  fs.createReadStream(path.join(__dirname, "csv/ingredients.csv"), "utf8")
    .pipe(csv())
    .on('data', (row) => {
      const ingredient = new Ingredient({
        name: row.name,
        scientificName: row.scientificName,
        type: row.type,
        tldr: row.tldr.split(', '),
        description: row.description,
        sourceUrl: row.source,
      });

      ingredient.save();

      console.log(`Saved ${row.name} to ingredient database`);
    });
}

fillDatabase();