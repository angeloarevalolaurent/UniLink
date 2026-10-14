import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
    // 1. Obtenemos los resultados de la validación
    let errors = validationResult(req);

    // 2. Evaluamos si el arreglo de errores está vacío
    if (!errors.isEmpty()) {
        // Si NO está vacío (es decir, hay errores), respondemos con un 400
        return res.status(400).json({ errors: errors.array() });
    }

    // Si está vacío, todo está bien y pasamos al siguiente controlador
    next();
};