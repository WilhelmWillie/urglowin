import express, { Request, Response } from "express";
import csv from "csv-parser";
import fs from "fs";
import path from "path";

import Product from "../models/product";
import User from "../models/user";

import isAuthenticated from "../utils/auth";

const router = express.Router();

router.get("/", async (req : Request, res : Response) => {
  const { category } = req.query;

  const products = !!category ? (await Product.find({category})) : (await Product.find({}));
  
  return res.json({products});
});

router.get("/categories", async (req : Request, res : Response) => {
  const products = await Product.find({});
  const categories = new Set();

  products.forEach(product => {
    categories.add(product.category);
  });

  return res.json({categories: Array.from(categories)});
});

router.get("/:id", async (req : Request, res : Response) => {
  const { id } = req.params;

  const product = await Product.findOne({_id: id});

  return res.json({product});
});

router.post("/:id/save", isAuthenticated, async (req : any, res : Response) => {
  const { id } = req.params;
  const user = req.user.user;

  const loggedInUser = await User.findOne({_id: user._id})
  const product = await Product.findOne({_id: id});

  loggedInUser.saved.push(product._id);
  await loggedInUser.save();

  return res.json({product});
});

export default router;