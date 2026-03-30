import { Router } from "express";
import { signUpController } from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post('/signup', signUpController )

export default authRouter