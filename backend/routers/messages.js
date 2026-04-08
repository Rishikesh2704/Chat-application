import { Router } from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { getUsersController, privateMessagesController, sendMessagesController } from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.get('/users', verifyUser , getUsersController)
messagesRouter.get('/:userId', verifyUser, privateMessagesController)

messagesRouter.post('/sendMessage/:userId', verifyUser, sendMessagesController)

export default messagesRouter