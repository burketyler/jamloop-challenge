"use client";

import { FormTextField } from "@/components/ui/form/controls/form-text-field";
import {
  LoginRequest,
  loginRequestSchema,
} from "@/features/auth/types/login-request";
import { loginAction } from "@/features/auth/actions/login-action";
import { useActionForm } from "@/hooks/use-action-form";
import { FormContainer } from "@/components/ui/form/form-container";
import { FormGrid } from "@/components/ui/form/form-grid";
import Link from "next/link";
import { FormActions } from "@/components/ui/form/form-actions";
import { FormTitle } from "@/components/ui/form/form-title";
import { FormError } from "@/components/ui/form/form-error";
import { FormSubmitButton } from "@/components/ui/form/form-submit-button";

export function LoginForm() {
  const { form, state, isLoading, onSubmit } = useActionForm<LoginRequest>({
    action: loginAction,
    schema: loginRequestSchema,
    props: {
      defaultValues: {
        username: "",
        password: "",
      },
    },
  });

  return (
    <FormContainer id={"login-form"} maxWidth={"40rem"}>
      <FormGrid>
        <FormTitle>Please sign in to continue</FormTitle>
        <FormTextField
          name={"username"}
          label={"Username"}
          autoComplete={"off"}
          control={form.control}
        />
        <FormTextField
          name={"password"}
          type={"password"}
          label={"Password"}
          autoComplete={"off"}
          control={form.control}
        />
        <FormError>{state?.error?.message}</FormError>
      </FormGrid>
      <FormActions>
        <Link href={""}>I forgot my password</Link>
        <FormSubmitButton onClick={onSubmit} isLoading={isLoading}>
          Sign In
        </FormSubmitButton>
      </FormActions>
    </FormContainer>
  );
}
