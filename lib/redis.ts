import { Redis } from '@upstash/redis';

if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
  throw new Error(
    'Missing Redis environment variables. Please set KV_REST_API_URL and KV_REST_API_TOKEN in your Vercel project settings.'
  );
}

export const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN
});
