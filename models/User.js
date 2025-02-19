import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    preferences: { genres: [String], authors: [String] }
});

export default mongoose.model("User", UserSchema);