"use client";

import {
  Chip,
  FormControl,
  FormHelperText,
  Grid2,
  Grid2Props,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectProps,
} from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { Flex } from "@/components/layout/flex";
import { BaseFormControl } from "@/types/base-form-control";

type ReservedKeys = keyof Pick<
  SelectProps,
  "name" | "error" | "labelId" | "input"
>;

export interface FormMultipleSelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<SelectProps, ReservedKeys>,
    BaseFormControl<TFieldValues> {
  span?: Grid2Props["size"];
  options?: { label: string; value: string }[];
}

export function FormMultipleSelectField<
  TFieldValues extends FieldValues = FieldValues,
>({
  span = 12,
  options = [],
  label,
  name,
  control,
}: FormMultipleSelectFieldProps<TFieldValues>) {
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
                multiple
                id={id}
                error={hasError}
                labelId={labelId}
                input={<OutlinedInput id={`${id}-input`} label={label} />}
                renderValue={(selected) => (
                  <Flex flexWrap={"wrap"} gap={0.5}>
                    {selected.map((value: string) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Flex>
                )}
              >
                {options?.map(({ label, value }) => (
                  <MenuItem key={value} value={value ?? label}>
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
