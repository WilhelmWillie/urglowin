import express, { Request, Response } from "express";
import session from "express-session";
import next from "next";
import { json } from "body-parser";
import passport from "passport";

import AuthRouter from "./api/auth";
import ProductsRouter from "./api/products";

import connectToDb from "./utils/db";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

connectToDb();

const server = express();
server.use(session({ secret: "cats" }));
server.use(passport.initialize());
server.use(passport.session());
server.use(json());

server.use("/auth", AuthRouter);
server.use("/api/products", ProductsRouter);

server.get("/test", (req : any, res) => {
  if (req.user) {
    return res.json({ user: req.user });
  } else {
    return res.status(403).json({ message: "You are not logged in"});
  }
});

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