import type { Request, Response } from "express"
import User from "../models/User"


export const createAccount = async(req:Request , res:Response) =>{
    const {email} = req.body
    const userExists = await User.findOne({email})
    
    if (userExists) {
        const error = new Error('Un usuario con ese email ya esta registrado')
        return res.status(409).json({error: error.message})
    }

    const user = new User(req.body)
    await  user.save()
    res.status(200).json({msg: 'Registro recibido correctamente'})
}