import express from "express";
import passport from "passport";

import passportSetup from "../utils/passport";

passportSetup();

const router = express.Router();

router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));

router.get("/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/auth/success",
  failureRedirect: "/auth/fail"
}));

router.get("/fail", (req, res) => {
  res.send("failed attempt");
});

router.get("/success", (req, res) => {
  res.send("success");
});

router.get("/logout", (req : any, res) => {
  req.logout();
  res.redirect("/");
})

export default router;