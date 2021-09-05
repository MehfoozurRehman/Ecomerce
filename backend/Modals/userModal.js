import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  id: String,
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.model("userModal", userSchema);
