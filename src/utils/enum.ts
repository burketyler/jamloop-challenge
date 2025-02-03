import { FormSelectFieldProps } from "@/components/ui/form/controls/form-select-field";

export function enumToSelectOptions(
  _enum: Record<string, string>,
): FormSelectFieldProps["options"] {
  return Object.values(_enum).map((label) => ({ label, value: label }));
}
