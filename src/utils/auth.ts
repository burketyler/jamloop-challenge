import { cookies } from "next/headers";
import { SessionToken } from "@/lib/mock-auth-service";
import { redirect } from "next/navigation";

export const SESSION_TOKEN_COOKIE_NAME = "SESSION_TOKEN";

export const assertSession = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return session;
};

export const getSession = async () => {
  const cookie = await getSessionTokenCookie();
  return cookie ? (JSON.parse(cookie) as SessionToken) : undefined;
};

export const isLoggedIn = async () => {
  return !!(await getSessionTokenCookie());
};

export const getSessionTokenCookie = async () => {
  if (typeof window !== "undefined") {
    return "";
  }

  const cookieStore = await cookies();
  return cookieStore.get(SESSION_TOKEN_COOKIE_NAME)?.value;
};
