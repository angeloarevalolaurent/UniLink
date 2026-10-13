# 🔗 UniLink

**A modern full-stack link-in-bio platform built with the MERN stack.**

Create a personalized page to centralize your social media profiles and custom links in one place.

<!-- Add a screenshot of your application here -->

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose

## ✨ Features

- 🔗 Centralized social media profiles and custom links.
- ⚡ REST API built with Express.js.
- 📱 Responsive user interface.
- 🗄️ MongoDB database integration.
- 🧩 Separate frontend and backend architecture.

## 📂 Project Structure

```text
unilink/
├── backend/
└── frontend/
```

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- Git
- MongoDB connection string

### 1. Clone the repository

```bash
git clone https://github.com/your-username/unilink.git
cd unilink
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

### 3. Configure the frontend

Open a second terminal from the project root:

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_API_URL=http://localhost:4000/api
```

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## 🌐 Deployment

The frontend can be deployed to Vercel or Netlify, while the backend can be hosted on Render or Railway.

Configure the production environment variables and database connection before deploying.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
