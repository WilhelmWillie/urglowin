// URGLOWIN Types

declare type Product = {
  brand: string;
  productName: string;
  category: string;
  usedFor: Array<string>;
  ingredientsUrl: string;
  regularPrice: number;
  description: string;
  instructions: string;
  fullIngredientList: Array<string>;
  imageUrl: string;
  size: number;
  ingredients: Array<Ingredient>;
}

declare type Ingredient = {
  name: string;
  scientificName: string;
  type: string;
  tldr: Array<string>;
  description: string;
  productsUsing?: Array<Product>;
  negativeReactionsWith?: Array<Ingredient>;
  sourceUrl?:  string;
  comparableTo?: Array<Ingredient>;
}