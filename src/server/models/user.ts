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
  }]
});

const userModel = mongoose.model("User", userSchema);

export default userModel;