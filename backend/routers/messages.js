import { Router } from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { getUsersController } from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.get('/users', verifyUser , getUsersController)

export default messagesRouter