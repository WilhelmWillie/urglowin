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
        profileFields: ["email", "name", "picture.type(large)"]
      },
      async function(accessToken, refreshToken, profile, done) {
        const { id } = profile;
        const { email, first_name, last_name, picture } = profile._json;

        const userData = {
          fbId: id,
          email,
          firstName: first_name,
          lastName: last_name,
          profilePic: picture.data.url,
        };

        const user = await User.findOne({fbId: id}).populate('saved');
        
        if (!!user) {
          done(null, {
            user
          })
        } else {
          const newUser = new User(userData);
          await newUser.save();

          done(null, {
            newUser
          });
        }
      }
    )
  );
}