import { HasChildren } from "@/types/helper-types";
import { FormHelperText } from "@mui/material";

export const FormError = ({ children }: HasChildren) =>
  children && <FormHelperText error>{children}</FormHelperText>;
