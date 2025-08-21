import { validateToken } from "$lib/server/auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get("Authorization")?.split(" ")[1];

  if (token) {
    const isValid = validateToken(token);
    event.locals.loggedIn = isValid;
  }

  return resolve(event);
};
