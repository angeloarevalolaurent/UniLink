# 🚀 UniLink — RESTful API & Backend Service

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=flat&logo=render&logoColor=white)](https://render.com/)

> Service Backend robusto y escalable para la plataforma UniLink. Proporciona endpoints para autenticación segura (JWT), gestión de perfiles de usuario, verificación dinámica de handles en tiempo real y carga optimizada de archivos multimedia mediante Cloudinary.

---

## 🛠️ Stack Tecnológico & Dependencias

- **Entorno de Ejecución:** Node.js (TypeScript)
- **Framework Web:** Express.js
- **Base de Datos & ODM:** MongoDB Atlas / Mongoose
- **Autenticación & Seguridad:** JSON Web Tokens (JWT), BcryptJS, CORS
- **Validación de Datos:** Express-Validator
- **Gestión Multimedia:** Cloudinary SDK, Multer
- **Herramientas de Desarrollo:** `tsx` / `nodemon`, TypeScript Compiler (`tsc`)

---

## ✨ Características de la API

- 🔐 **Sistema de Autenticación:** Registro de usuarios, inicio de sesión seguro mediante emisión de tokens JWT y encriptación de contraseñas.
- 🔍 **Verificación de Handles:** Endpoints optimizados para validar la disponibilidad de slug/nombre de usuario en tiempo real.
- 🛡️ **Middlewares de Protección:** Control de acceso a rutas privadas mediante verificación de headers `Authorization: Bearer <token>`.
- 🖼️ **Carga de Avatares:** Procesamiento y subida directa de imágenes de perfil a la nube vía Cloudinary.
- ⚙️ **Manejo Estructurado de Errores:** Respuestas HTTP estandarizadas y gestión centralizada de validación de entradas.

---

## 📁 Estructura del Proyecto

```text
backend/
├── src/
│   ├── config/          # Configuración de servicios (db.ts, cloudinary.ts, cors.ts)
│   ├── controllers/     # Handlers de lógica de negocio (authController.ts, userController.ts)
│   ├── middleware/      # Middlewares de Express (auth.ts, validation.ts)
│   ├── models/          # Modelos y esquemas de Mongoose (User.ts)
│   ├── utils/           # Helper functions (jwt.ts, auth.ts)
│   ├── router.ts        # Definición centralizada de rutas REST
│   └── server.ts        # Inicialización de la app Express y conexión a BD
├── .env.example
├── tsconfig.json
└── package.json

```


## 🔑 Variables de Entorno (`.env`)

Crea un archivo `.env` en la raíz del directorio `backend/` tomando como referencia las siguientes variables:


```env
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/unilink?retryWrites=true&w=majority
JWT_SECRET=tu_clave_secreta_jwt_super_segura
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret

```

---

## 📡 Principales Endpoints de la API

### 🔓 Autenticación & Registro (`/api/auth`)

| Método | Endpoint | Descripción | Acceso |
| --- | --- | --- | --- |
| `POST` | `/api/auth/register` | Crea una nueva cuenta de usuario | Público |
| `POST` | `/api/auth/login` | Autentica al usuario y retorna token JWT | Público |
| `POST` | `/api/search` | Verifica disponibilidad de un handle personalizado | Público |

### 🔒 Usuario & Perfil (`/api/user`)

| Método | Endpoint | Descripción | Acceso |
| --- | --- | --- | --- |
| `GET` | `/api/user` | Obtiene la información del usuario autenticado | Privado (JWT) |
| `PATCH` | `/api/user` | Actualiza enlaces, redes y bio del perfil | Privado (JWT) |
| `POST` | `/api/user/image` | Procesa y sube una imagen de perfil a Cloudinary | Privado (JWT) |

### 🌐 Perfil Público (`/api/`)

| Método | Endpoint | Descripción | Acceso |
| --- | --- | --- | --- |
| `GET` | `/api/:handle` | Obtiene el perfil público por su slug para visualización | Público |

---

## ⚙️ Instalación y Ejecución Local

### 1. Instalar dependencias

```bash
npm install

```

### 2. Modo Desarrollo (con recarga automática)

```bash
npm run dev

```

El servidor se iniciará en `http://localhost:4000`.

### 3. Compilación para Producción

```bash
npm run build

```

### 4. Iniciar Servidor en Producción

```bash
npm start

```

---

## 🌐 Despliegue en Producción

El servicio backend está preparado para desplegarse de manera independiente en **Render**:

* **Build Command:** `npm install && npm run build`
* **Start Command:** `npm start`
* **CORS:** Asegúrate de incluir la URL de producción del Frontend (`https://unilinkdev.netlify.app`) en la variable de entorno `FRONTEND_URL`.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.
```

