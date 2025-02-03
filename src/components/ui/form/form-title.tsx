import { Grid2, Typography } from "@mui/material";
import { HasChildren } from "@/types/helper-types";

export const FormTitle = ({ children }: HasChildren) => (
  <Grid2 size={12}>
    <Typography component={"h2"} variant={"h6"}>
      {children}
    </Typography>
  </Grid2>
);
