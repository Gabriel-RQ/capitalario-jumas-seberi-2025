import { createToken } from "$lib/server/auth";
import { redirect } from "@sveltejs/kit";

export function load({ locals }) {
  if (locals.loggedIn) {
    redirect(302, "/");
  }
}

export const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const password = formData.get("password") as string;

    if (!password || password.length < 6) {
      return { error: true, message: "Informe uma senha válida" };
    }

    if (password !== "123456") {
      return { error: true, message: "Senha incorreta" };
    }

    const sessionToken = createToken(Date.now().toString());

    cookies.set("Authorization", `Bearer ${sessionToken}`, {
      path: "/",
      httpOnly: true,
      sameSite: true,
      secure: true,
    });
    redirect(302, "/");
  },
};
