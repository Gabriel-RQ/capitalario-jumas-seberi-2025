import { KV_REST_API_URL, KV_REST_API_TOKEN } from "$env/static/private";
import { Redis } from "@upstash/redis";

// Initialize Redis
const redis = new Redis({
  url: KV_REST_API_URL || "",
  token: KV_REST_API_TOKEN || "",
});

export async function incrementCounter() {
  await redis.incr("counter");
}

export async function getCounter() {
  const counter = (await redis.get("counter")) as string;
  return parseInt(counter);
}

export async function getMaxCounter() {
  const max = (await redis.get("max")) as string;
  return parseInt(max);
}
