import { redirect } from "@sveltejs/kit";

export function load({ locals }) {
  if (!locals.loggedIn) {
    redirect(302, "/login");
  }
}
