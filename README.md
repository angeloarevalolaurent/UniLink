# 🔗 UniLink — Full-Stack Link-in-Bio Platform

[![Netlify Status](https://img.shields.io/badge/Frontend-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)](https://unilinkdev.netlify.app/)
[![Render Status](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat&logo=render&logoColor=white)](https://unilinkdev.netlify.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A production-ready, full-stack link-in-bio web application designed to centralize social media profiles, custom links, and personal branding into a sleek, highly responsive landing page.

---

## 📽️ Demo & Live Preview

- 🌐 **Live Demo:** [unilinkdev.netlify.app](https://unilinkdev.netlify.app/)
- 🎥 **YouTube Walkthrough:** [Watch Project Demo](https://youtu.be/_F7bNRe6jPg)

<!-- Insert your ScreenToGif / Demo Image here -->

<img width="1411" height="882" alt="image" src="https://github.com/user-attachments/assets/7d7816f5-ad0a-4fd3-adbd-13de4a3db65d" />

---

## ✨ Features & Technical Highlights

- 🔒 **Authentication & Authorization:** Secure user registration and login powered by JSON Web Tokens (JWT) and Bcrypt password hashing.
- ⚡ **Real-Time Handle Verification:** Dynamic check for handle/slug availability before registration.
- 🖼️ **Media & Avatar Management:** Cloudinary API integration for seamless user profile image uploads and optimization.
- 🛠️ **State & Data Fetching:** Asynchronous server state management using TanStack Query (React Query) and custom Axios client interceptors.
- 🛡️ **Schema Validation:** Strict client-side and server-side input validation using Zod, Express-Validator, and React Hook Form.
- 📦 **Monorepo Architecture:** Modular structure separating concerns cleanly between `/frontend` and `/backend`.
- 🚀 **Production Ready:** Configured for independent cross-origin deployment (Netlify SPA frontend + Render Node.js API).

---

## 🛠️ Tech Stack

### **Frontend**
- **Core:** React 18, TypeScript, Vite
- **State & Queries:** TanStack Query (`@tanstack/react-query`)
- **Routing:** React Router DOM
- **Forms & Validation:** React Hook Form, Zod
- **Styling & UI:** Tailwind CSS, Lucide React (Icons), Sonner (Toast notifications)
- **HTTP Client:** Axios (Custom Instance & Interceptors)

### **Backend**
- **Runtime & Framework:** Node.js, Express.js (TypeScript)
- **Database & ODM:** MongoDB Atlas, Mongoose
- **Security:** JSON Web Token (JWT), BcryptJS, CORS configuration
- **Media Services:** Cloudinary SDK, Multer
- **Validation:** Express-Validator

---

## 📂 Project Structure

```text
UniLink/
├── backend/
│   ├── src/
│   │   ├── config/         # MongoDB & Cloudinary configurations
│   │   ├── controllers/    # API Request Handlers (Auth, User, Links)
│   │   ├── middleware/     # JWT Auth & Request Validation Middlewares
│   │   ├── models/         # Mongoose Schemas (User, Link)
│   │   ├── router.ts       # Express Route definitions
│   │   └── server.ts       # Express App initialization
│   ├── .env.example
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── api/            # Axios instance & TanStack Query fetchers
    │   ├── components/     # Reusable UI components & Layouts
    │   ├── views/          # Page views (Auth, Dashboard/Admin, Public Profile)
    │   ├── router.tsx      # React Router route setup
    │   └── main.tsx
    ├── .env.example
    └── package.json
