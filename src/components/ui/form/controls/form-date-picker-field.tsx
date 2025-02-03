"use client";

import { Grid2, Grid2Props } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { BaseFormControl } from "@/types/base-form-control";

type ReservedKeys = keyof Pick<DatePickerProps<Dayjs>, "name">;

export interface FormDatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<DatePickerProps<Dayjs>, ReservedKeys>,
    BaseFormControl<TFieldValues> {
  span?: Grid2Props["size"];
}

export function FormDatePickerField<
  TFieldValues extends FieldValues = FieldValues,
>({ span = 12, name, control, ...props }: FormDatePickerProps<TFieldValues>) {
  return (
    <Grid2 size={span}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const hasError = !!fieldState.error;
          return (
            <DatePicker
              {...field}
              {...props}
              value={dayjs(field.value)}
              onChange={(value) => field.onChange(value?.toDate())}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: hasError,
                  helperText: hasError && fieldState.error?.message,
                },
              }}
            />
          );
        }}
      />
    </Grid2>
  );
}
