import { Router } from "express";

const router = Router()

//Routing
router.post('/auth/register',(req, res) =>{
    console.log(req.body);
    
    res.status(200).json({msg: 'Registro recibido correctamente'})
} )

export default router