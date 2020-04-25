import express, { Request, Response } from "express";

import User from "../models/user";

import isAuthenticated from "../utils/auth";

const router = express.Router();

// Return current logged in user data
router.get("/", isAuthenticated, async (req : any, res : Response) => {
  return res.json({ user: req.user });
});

export default router;