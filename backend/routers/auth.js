import { Router } from "express";
import { loginContoller, signUpController } from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post('/signup', signUpController )
authRouter.get('/login', loginContoller )

export default authRouter