/**
 * Central API Configuration for LAX360 Ventures
 * 
 * - VITE_API_BASE_URL from .env or deployment environment is used if set.
 * - Defaults to the deployed cloud backend on Render: https://lax360-ventures-backend.onrender.com
 * - For local backend testing, set VITE_API_BASE_URL=http://localhost:8080 in .env
 */

export const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL || "").trim() ||
  "https://lax360-ventures-backend.onrender.com";

export default API_BASE_URL;
