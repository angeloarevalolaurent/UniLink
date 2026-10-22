import axios from "axios";

//Instancia personalizada
const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL
})


// Interceptors de Axios y autenticación
api.interceptors.request.use((config) => {
     const token = localStorage.getItem('AUTH_TOKEN')

     if (token) {
        config.headers.Authorization =`Bearer ${token}`
     }
     return config
})

export default api