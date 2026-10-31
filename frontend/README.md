# 🎨 UniLink — Client-Side Application (Frontend)

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)](https://unilinkdev.netlify.app/)

> Aplicación cliente de alto rendimiento para UniLink. Proporciona una interfaz moderna, ultra rápida e interactiva para la creación de cuentas, administración de perfiles tipo *link-in-bio*, carga de avatares en tiempo real y renderizado responsivo de páginas públicas.

---

## 🛠️ Stack Tecnológico

- **Core UI Framework:** React 18 & TypeScript
- **Build Tool & Bundler:** Vite (Desarrollo y compilación ultrarrápida)
- **Estilos & UI:** Tailwind CSS & Lucide React (Iconografía)
- **Manejo de Estado Asíncrono:** TanStack Query (`@tanstack/react-query`)
- **Enrutamiento:** React Router DOM (SPA Routing)
- **Formularios & Validación:** React Hook Form & Zod
- **Cliente HTTP:** Axios (Instancia personalizada e interceptores)
- **Notificaciones UX:** Sonner (Toast Notifications)

---

## ✨ Características de la Interfaz

- ⚡ **Rendimiento SPA:** Enrutamiento del lado del cliente optimizado sin recargas de página.
- 🎨 **Diseño Moderno & Responsivo:** Layouts adaptativos diseñados con Tailwind CSS para dispositivos móviles y escritorio.
- 🔍 **Búsqueda Dinámica:** Verificación al vuelo de handles/slugs disponibles durante el flujo de registro.
- 🔒 **Flujo de Sesión Protegido:** Redirección automática y protección de rutas `/admin` basadas en estado de autenticación y tokens JWT.
- 🖼️ **Gestión de Perfil:** Subida e integración inmediata de avatares optimizados desde Cloudinary.
- 🍞 **UX Interactiva:** Notificaciones toast en tiempo real para retroalimentación instantánea de éxito o error en las peticiones.

---

## 📂 Estructura del Proyecto

```text
frontend/
├── public/              # Recursos estáticos (favicon, imágenes públicas)
├── src/
│   ├── api/             # Instancia de Axios (Dev/Prod API URL) y llamados HTTP
│   ├── components/      # Componentes reutilizables de UI (Forms, Navbar, Spinners, etc.)
│   ├── layouts/         # Templates de estructura (AuthLayout, AdminLayout)
│   ├── types/           # Interfaces y tipos globales de TypeScript
│   ├── utils/           # Utilidades y funciones helper
│   ├── views/           # Vistas principales de la aplicación:
│   │   ├── auth/        # Login, Registro, Búsqueda de Handle
│   │   ├── admin/       # Dashboard de administración y edición de perfil
│   │   └── public/      # Vista de landing pública del usuario (:handle)
│   ├── router.tsx       # Configuración global de React Router DOM
│   └── main.tsx         # Punto de entrada y configuraciones de Providers
├── .env.example
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── package.json
