import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fbId: {
    type: String,
    required: false,
    unique: true,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    required: false
  },
  saved: [{
    type: mongoose.Schema.ObjectId, 
    ref: 'Product' 
  }],
  username: {
    type: String,
    required: false,
    unique: true,
    maxlength: 20,
  },
  bio: {
    skinDescription: {
      type: String,
      maxlength: 140,
    },
    favProduct: {
      type: String,
      maxlength: 140,
    },
    favIngredient: {
      type: String,
      maxlength: 140,
    },
  },
  hasSetupProfile: Boolean,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;