import { createHmac } from "crypto";
import { PRIVATE_SESSION_KEY } from "$env/static/private";

export function createToken(sessionId: string) {
  const hmac = createHmac("sha256", PRIVATE_SESSION_KEY);
  hmac.update(sessionId);
  const signature = hmac.digest("hex");

  return `${sessionId}.${signature}`;
}

export function validateToken(token: string) {
  const [sessionId, signature] = token.split(".");

  if (!sessionId || !signature) {
    return false;
  }

  const hmac = createHmac("sha256", PRIVATE_SESSION_KEY);
  hmac.update(sessionId);
  const expectedSignature = hmac.digest("hex");

  return signature === expectedSignature;
}
