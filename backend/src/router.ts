import { Router } from "express";
import User from "./models/User";
import { createAccount } from "./handlers";

const router = Router()

//Routing
router.post('/auth/register', createAccount)

export default router