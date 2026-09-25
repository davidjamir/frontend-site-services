// lib/env.ts

export const isVercelProduction =
  process.env.VERCEL === "1" && process.env.VERCEL_ENV === "production";
export const isProduction = process.env.NODE_ENV === "production";
export const ADAPTER_API_ENDPOINT = process.env.ADAPTER_API_ENDPOINT!;
export const ADAPTER_SECRET_TOKEN = process.env.ADAPTER_SECRET_TOKEN;
export const INTERNAL_SECRET = process.env.INTERNAL_SECRET;
