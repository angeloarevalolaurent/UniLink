import { CorsOptions } from "cors";


export const corsConfig : CorsOptions = {
    origin: function(origin, callback) {
        if (origin === 'http://localhost:5174') {
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }
    }
}