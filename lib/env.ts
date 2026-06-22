// lib/env.ts

export const isProduction = process.env.NODE_ENV === "production";

export const isVercel = process.env.VERCEL === "1";

export const isVercelProduction =
  process.env.VERCEL === "1" && process.env.VERCEL_ENV === "production";

export const isVercelPreview =
  process.env.VERCEL === "1" && process.env.VERCEL_ENV === "preview";

export const isDevelopment = process.env.NODE_ENV === "development";
