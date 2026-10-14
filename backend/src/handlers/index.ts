import type { Request, Response } from "express"
import User from "../models/User"
import { hashPassword } from "../utils/auth"


export const createAccount = async(req:Request , res:Response) =>{
    const {email, password} = req.body
    const userExists = await User.findOne({email})
    
    if (userExists) {
        const error = new Error('Un usuario con ese email ya esta registrado')
        return res.status(409).json({error: error.message})
    }

    const user = new User(req.body)
    user.password = await hashPassword(password)
    await  user.save()
    res.status(200).json({msg: 'Registro recibido correctamente'})
}