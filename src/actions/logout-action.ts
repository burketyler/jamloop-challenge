"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_TOKEN_COOKIE_NAME } from "@/utils/auth";

export async function logoutAction() {
  const cookiesStore = await cookies();

  try {
    // Here we would revoke the token if possible and necessary
    cookiesStore.delete(SESSION_TOKEN_COOKIE_NAME);
  } catch (error) {
    console.error(error);
  } finally {
    redirect("/");
  }
}
