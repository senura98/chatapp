import { Redis } from "@upstash/redis";

export const db = new Redis({
    url: process.env.UPSTASH_REDIS_REST_ENDPOINT || '',
    token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});
