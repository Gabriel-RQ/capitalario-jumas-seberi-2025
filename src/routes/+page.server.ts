import {
  getCounter,
  getMaxCounter,
  incrementCounter,
} from "$lib/server/counter";
import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
  if (!locals.loggedIn) {
    redirect(302, "/login");
  }

  try {
    const counter = await getCounter();
    const maxCounter = await getMaxCounter();
    return { counter, maxCounter };
  } catch {
    return { counter: 0, maxCounter: 0 };
  }
}

export const actions = {
  increment: async () => {
    // const max = await getMaxCounter();
    // const counter = await getCounter();

    // if (counter < max) {
    await incrementCounter();
    // }
  },
};
