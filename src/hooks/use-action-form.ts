import { FieldValues, useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { FormState } from "@/types/form-state";
import { startTransition, useActionState } from "react";

export function useActionForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any, // eslint-disable-line @typescript-eslint/no-explicit-any
>({
  action,
  props,
  schema,
  initialFormState = undefined,
}: {
  schema: ZodSchema<TFieldValues>;
  action: (
    state: Awaited<FormState> | undefined,
    payload: TFieldValues,
  ) => FormState | Promise<FormState>;
  initialFormState?: FormState | undefined;
  props?: Omit<UseFormProps<TFieldValues, TContext>, "mode" | "resolver">;
}) {
  const [state, dispatch, isLoading] = useActionState(action, initialFormState);

  const form = useForm<TFieldValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    ...props,
  });

  const onSubmit = form.handleSubmit((data, event) => {
    event?.preventDefault();
    startTransition(() => dispatch(data));
  });

  return { form, state, onSubmit, isLoading };
}
