import type { Request, Response } from "express"
import formidable  from 'formidable'
import cloudinary from "../config/cloudinary";
import {v4 as uuid }from'uuid';
import slug from "slug"
import User from "../models/User"
import { checkPassword, hashPassword } from "../utils/auth"
import { generateJWT } from "../utils/jwt"

export const createAccount = async(req:Request , res:Response) =>{ 
    const {email, password} = req.body
    const userExists = await User.findOne({email})
    
    if (userExists) {
        const error = new Error('Un usuario con ese email ya esta registrado')
        return res.status(409).json({error: error.message})
    }

    const handle = slug(req.body.handle, '')
    const handleExists = await User.findOne({handle})
    if (handleExists) {
        const error = new Error('Nombre de usuario no disponible')
        return res.status(409).json({error: error.message})
    }    

    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle
    await  user.save()
    res.status(201).json({msg: 'Registro recibido correctamente'})
}


export const login = async(req:Request , res:Response) =>{
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (!user) {
        const error = new Error('El usuario no existe')
        return res.status(404).json({error: error.message})
    }

    const isPasswordCorrect = await checkPassword(password, user.password)
    if (!isPasswordCorrect) {
        const error = new Error('La contraseña es incorrecta')
        return res.status(401).json({error: error.message})
    }

    const token = generateJWT({id: user._id})
    res.send(token)
    res.status(200).json({msg: 'Has iniciado sesión correctamente'})
}

export const getUser = async(req:Request , res:Response) =>{
   res.json(req.user)
}

export const updateProfile = async(req:Request , res:Response) =>{
    try {
        const {description} = req.body
        const handle = slug(req.body.handle, '')
        const handleExists = await User.findOne({handle})
        if (handleExists && handleExists.email !== req.user.email) {
            const error = new Error('Nombre de usuario no disponible')
            return res.status(409).json({error: error.message})
        }    

        req.user.description = description
        req.user.handle = handle

        await req.user.save()
        res.send('Perfil Actualizado Correctamente')
        
    } catch (e) {
        const error = new Error('Hubo un Error')
        return res.status(500).json({error: error.message})
    }
}

export const uploadImage = async(req:Request , res:Response) =>{
    // 1. Instanciamos formidable
    const form = formidable({multiples:false})

    try {
    // 2. Ejecutamos form.parse para procesar la petición HTTP (req)
        form.parse(req,(error, fields, files)=>{
            if (error) {
                return res.status(500).json({
                    error:'Hubo un error al procesar el archivo'
                })
            }
        
            //Obtener la ruta temporal del archivo
            const filePath = files.file[0].filepath;
        
            //Subir la imagen a Cloudinary
            cloudinary.uploader.upload(
                filePath,
                { public_id: uuid() },
                async function (cloudinaryError, result) {
                    //Manejar errores de Cloudinary
                    if (cloudinaryError) {
                        return res.status(500).json({
                            error: 'Hubo un Error al subir la imagen',
                            details: cloudinaryError.message
                        });
                    }

                    //Guardar la URL de la imagen en el usuario
                    if (result) {
                        req.user.image = result.secure_url;
                        await req.user.save();

                        // Respondemos a Postman para que la carga termine exitosamente
                        return res.json({
                            message: 'Imagen subida correctamente',
                            image: result.secure_url
                        });
                    }
                }
            );
        })
        
    } catch (e) {
         const error = new Error('Hubo un error');

        return res.status(500).json({
            error: error.message
        });
    }
}