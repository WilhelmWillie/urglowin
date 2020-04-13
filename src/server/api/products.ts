import express, { Request, Response } from "express";
import csv from "csv-parser";
import fs from "fs";
import path from "path";

import Product from "../models/product";

const router = express.Router();

router.get("/", async (req : Request, res : Response) => {
  const products = await Product.find({});
  return res.json({products});
});

export default router;