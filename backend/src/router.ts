import { Router } from "express";
import { createAccount } from "./handlers";
import { handleInputErrors } from "./middleware/validation";
import { body } from "express-validator";

const router = Router()

//Routing
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacío'),
    body('name')
        .notEmpty()
        .withMessage('ElNombre no puede ir vacío'),
    body('email')
        .isEmail()
        .withMessage('E-mail no valido'),
    body('password')
            .isLength({min: 8})
            .withMessage('El password debe ser de al menos 8 caracteres')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)
            .withMessage('El password debe incluir al menos una mayúscula, una minúscula y un número'),
    handleInputErrors,
    createAccount)

export default router