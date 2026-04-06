import mongoose from "mongoose";
import { user } from "./user.model";

const messagesSchema = new mongoose.Schema(
  {
    SenderId: {
      type: mongoose.Types.ObjectId,
      ref: user,
      required: true,
    },
    ReceiverId: {
      type: mongoose.Types.ObjectId,
      ref: user,
      required: true,
    },
    text: {
      type: string,
    },
    image: {
      type: string,
    },
  },
  {
    timestamps: true,
  },
);

export const messageModel = new mongoose.model("Messages", messagesSchema);
