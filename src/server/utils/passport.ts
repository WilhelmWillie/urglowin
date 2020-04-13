import passport from "passport";
import dotenv from "dotenv";
import strategy from "passport-facebook";

import User from "../models/user";

const FacebookStrategy = strategy.Strategy;

export default () => {
  dotenv.config();

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ["email", "name"]
      },
      function(accessToken, refreshToken, profile, done) {
        const { email, first_name, last_name } = profile._json;
        
        console.log(profile._json);
        console.log({email, first_name, last_name });
        
        const userData = {
          email,
          firstName: first_name,
          lastName: last_name
        };
        new User(userData).save();
        done(null, profile);
      }
    )
  );
}