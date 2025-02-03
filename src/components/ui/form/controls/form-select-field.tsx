"use client";

import {
  FormControl,
  FormHelperText,
  Grid2,
  Grid2Props,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { BaseFormControl } from "@/types/base-form-control";

type ReservedKeys = keyof Pick<SelectProps, "error" | "name" | "multiple">;

export interface FormSelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<SelectProps, ReservedKeys>,
    BaseFormControl<TFieldValues> {
  span?: Grid2Props["size"];
  options?: { label: string; value: string }[];
}

export function FormSelectField<
  TFieldValues extends FieldValues = FieldValues,
>({
  span = 12,
  options = [],
  label,
  name,
  control,
  ...props
}: FormSelectFieldProps<TFieldValues>) {
  return (
    <Grid2 size={span}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const id = `${name}`;
          const labelId = `${id}-label`;
          const hasError = !!fieldState.error;

          return (
            <FormControl fullWidth>
              <InputLabel id={labelId} error={hasError}>
                {label}
              </InputLabel>
              <Select
                {...field}
                {...props}
                id={id}
                label={label}
                error={hasError}
                labelId={labelId}
              >
                {options?.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
              {hasError && (
                <FormHelperText error>
                  {fieldState.error?.message}
                </FormHelperText>
              )}
            </FormControl>
          );
        }}
      />
    </Grid2>
  );
}
