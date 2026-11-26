# LAX360 Ventures — Full-Stack Project

This repository contains the complete full-stack codebase for **LAX360 Ventures**: a modern SaaS product showcase website and its supporting backend service.

---

## 📁 Repository Structure

```
.
├── backend/                  # Java 17 / Spring Boot 3.3.4 REST API service
│   ├── src/                  # Source code (Controllers, Services, Repositories, Models)
│   ├── pom.xml               # Maven configuration
│   ├── Dockerfile            # Container build for deployment
│   ├── render.yaml           # Render deployment blueprint
│   ├── .env.example          # Template for backend environment variables
│   └── README.md             # Detailed backend guide & API docs
│
├── frontend/                 # React 19 / Vite / Tailwind CSS client application
│   ├── src/                  # Components, Pages, Assets, Context, Config
│   ├── public/               # Static assets & icons
│   ├── package.json          # Node dependencies & build scripts
│   ├── vite.config.js        # Vite configuration & dev proxy
│   ├── .env.example          # Template for frontend environment variables
│   └── README.md             # Detailed frontend guide & UI component docs
│
├── .gitignore                # Global workspace gitignore
└── README.md                 # Project root documentation
```

---

## 🚀 Quick Start Guide

### 1. Frontend Setup (`/frontend`)

**Prerequisites:** Node.js 18+ and npm.

```bash
cd frontend

# Install dependencies
npm install

# Run Vite development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build
```

By default, the frontend is configured in `frontend/src/config/api.js` to connect to the deployed cloud backend on Render (`https://lax360-ventures-backend.onrender.com`).  
To connect to your local backend, copy `frontend/.env.example` to `frontend/.env` and uncomment:
```env
VITE_API_BASE_URL=http://localhost:8080
```

---

### 2. Backend Setup (`/backend`)

**Prerequisites:** Java 17 and Maven (or Docker).

```bash
cd backend

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB Atlas URI and Resend API key

# Run tests
mvn test

# Package and run locally
mvn spring-boot:run
```

Or build and run using Docker:
```bash
docker build -t lax360-backend .
docker run -p 8080:8080 --env-file .env lax360-backend
```

---

## 🌐 Deployment Details

| Component | Platform | URL |
| :--- | :--- | :--- |
| **Frontend** | Vercel | [https://lax360-ventures-frontend.vercel.app](https://lax360-ventures-frontend.vercel.app) |
| **Backend** | Render | [https://lax360-ventures-backend.onrender.com](https://lax360-ventures-backend.onrender.com) |

### Key Endpoints
- **Health Check:** `GET /actuator/health`
- **Book a Demo API:** `POST /api/demo-requests`
- **Admin & CMS Endpoints:** `/api/products`, `/api/industries`, `/api/customers`, `/api/team-members`
