import type { Request, Response } from "express"
import User from "../models/User"


export const createAccount = async(req:Request , res:Response) =>{
    const user = new User(req.body)
    await  user.save()
    res.status(200).json({msg: 'Registro recibido correctamente'})
}