import express, { Request, Response } from "express";
import next from "next";

import ProductsRouter from "./api/products";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const server = express();
server.use("/api/products", ProductsRouter);

(async () => {
  try {
    await app.prepare();
    
    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`=================================================================`);
      console.log(`🚀 Launching server on port ${port} - env ${process.env.NODE_ENV}`);
      console.log(`=================================================================`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();