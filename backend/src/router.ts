import { Router } from "express";
import User from "./models/User";

const router = Router()

//Routing
router.post('/auth/register', async (req, res) =>{
    const user = new User(req.body)
    await  user.save()
    res.status(200).json({msg: 'Registro recibido correctamente'})
} )

export default router