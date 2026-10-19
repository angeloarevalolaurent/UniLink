import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
    origin: function(origin, callback) {
        // Si ejecutamos con la bandera '--api', permitimos cualquier origen (ideal para Postman)
        if (process.argv[2] === '--api') {
            return callback(null, true);
        }

        const whiteList = [process.env.FRONTEND_URL];

        if (whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Error de CORS'));
        }
    }
};