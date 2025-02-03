"use server";

import { cookies } from "next/headers";
import { AuthError, mockAuthService } from "@/lib/mock-auth-service";
import { FormState } from "@/types/form-state";
import { redirect } from "next/navigation";
import { SESSION_TOKEN_COOKIE_NAME } from "@/utils/auth";
import {
  LoginRequest,
  loginRequestSchema,
} from "@/features/auth/types/login-request";

export async function loginAction(
  state: FormState = {},
  payload: LoginRequest,
): Promise<FormState> {
  state.error ??= {};
  let redirectPath: string | undefined;
  const cookiesStore = await cookies();

  try {
    const { username, password } = loginRequestSchema.parse(payload);
    const tokenOrError = await mockAuthService.login(username, password);

    if (typeof tokenOrError === "string") {
      state.error.message = mapErrorCodes(tokenOrError);
      return state;
    }

    redirectPath = "/customer/campaigns";
    cookiesStore.set(SESSION_TOKEN_COOKIE_NAME, JSON.stringify(tokenOrError), {
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: "lax",
      expires: tokenOrError.expires,
    });
  } catch (error) {
    /*
     In a real app, and backend logging should be a first class citizen rather than using console directly.
     An integration with a monitoring tool like DataDog or other would be necessary to ensure proper observability.
    */
    console.error(error);
    state.error.message = "Something went wrong, please try again later.";
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

function mapErrorCodes(error: AuthError) {
  switch (error) {
    case "INCORRECT_PASSWORD":
    case "USER_NOT_FOUND":
      return "Username or password is incorrect.";
  }
}
