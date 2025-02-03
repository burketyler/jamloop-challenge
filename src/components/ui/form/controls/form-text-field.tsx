"use client";

import {
  BaseTextFieldProps,
  Grid2,
  Grid2Props,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { ReactNode } from "react";
import { BaseFormControl } from "@/types/base-form-control";

type ReservedKeys = keyof Pick<
  BaseTextFieldProps,
  "name" | "error" | "helperText"
>;

export interface FormTextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<BaseTextFieldProps, ReservedKeys>,
    BaseFormControl<TFieldValues> {
  span?: Grid2Props["size"];
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

export function FormTextField<TFieldValues extends FieldValues = FieldValues>({
  fullWidth = true,
  span = 12,
  name,
  control,
  startAdornment,
  endAdornment,
  ...props
}: FormTextFieldProps<TFieldValues>) {
  return (
    <Grid2 size={span}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const hasError = !!fieldState.error;

          return (
            <TextField
              {...field}
              {...props}
              error={hasError}
              fullWidth={fullWidth}
              helperText={hasError && fieldState.error?.message}
              slotProps={{
                input: {
                  startAdornment: startAdornment && (
                    <InputAdornment position={"start"}>
                      {startAdornment}
                    </InputAdornment>
                  ),
                  endAdornment: endAdornment && (
                    <InputAdornment position={"end"}>
                      {endAdornment}
                    </InputAdornment>
                  ),
                },
              }}
            />
          );
        }}
      />
    </Grid2>
  );
}
