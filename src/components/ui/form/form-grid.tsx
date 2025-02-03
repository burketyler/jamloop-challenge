import { Grid2, Grid2Props } from "@mui/material";
import { HasChildren } from "@/types/helper-types";

export interface FormGridProps
  extends HasChildren,
    Omit<Grid2Props, "onSubmit" | "children"> {}

export function FormGrid({ spacing = 2, children, ...props }: FormGridProps) {
  return (
    <Grid2 container spacing={spacing} {...props}>
      {children}
    </Grid2>
  );
}
