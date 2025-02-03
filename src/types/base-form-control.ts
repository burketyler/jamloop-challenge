import { ControllerProps, FieldValues } from "react-hook-form";

export type BaseFormControl<TFieldValues extends FieldValues = FieldValues> =
  Pick<ControllerProps<TFieldValues>, "control" | "name">;
