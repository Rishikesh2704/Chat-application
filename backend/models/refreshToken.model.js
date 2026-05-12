import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    Token: {
      type: Number,
      required: true,
      unique: true,
    },
    userId: {
      type: Number,
      required: true,
      unique: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps:true
  }
);

export const RefreshToken = mongoose.model("RefreshToken", schema)