import express, { Request, Response } from "express";
import csv from "csv-parser";
import fs from "fs";
import path from "path";

const router = express.Router();

router.get("/", (req : Request, res : Response) => {
  const response = [];

  fs.createReadStream(path.join(__dirname, "products.csv"), "utf8")
    .pipe(csv())
    .on('data', (row) => {
      response.push(row);
    })
    .on('end', () => {
      return res.json({products: response});
    });
});

export default router;