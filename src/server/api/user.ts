import express, { Request, Response } from "express";

import User from "../models/user";

import isAuthenticated from "../utils/auth";

const router = express.Router();

// Return current logged in user data
router.get("/", isAuthenticated, async (req : any, res : Response) => {
  const user = await User.findOne({_id: req.user.user._id}).populate('saved');
  return res.json({user});
});

export default router;