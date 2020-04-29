import express, { Request, Response } from "express";

import User from "../models/user";

import isAuthenticated from "../utils/auth";

const router = express.Router();

// Return current logged in user data
router.get("/", isAuthenticated, async (req : any, res : Response) => {
  const user = await User.findOne({_id: req.user._id}).populate('saved');
  return res.json({user});
});

// Return a diff user
router.get("/:id", async (req : any, res : Response) => {
  const user = await User.findOne({username: req.params.username}).populate('saved');
  return res.json({user});
});

router.post("/edit", isAuthenticated, async (req : any, res : Response) => {
  const user = await User.findOne({_id: req.user._id});

  const { username, skinDescription, favProduct, favIngredient } = req.body;

  user.username = username;
  user.bio = {
    skinDescription,
    favProduct,
    favIngredient,
  }

  user.hasSetupProfile = true;

  try {
    await user.save();
  } catch(err) {
    return res.status(400).json({ error: err});
  } finally {
    return res.json({user});
  }
});

export default router;