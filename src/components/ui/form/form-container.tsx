import { HasChildren } from "@/types/helper-types";
import { Box, BoxProps } from "@mui/material";
import { FlexColumn } from "@/components/layout/flex";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

export interface FormContainerProps
  extends HasChildren,
    Omit<BoxProps, "title"> {
  id: string;
}

export const FormContainer = ({
  maxWidth = "45rem",
  id,
  children,
  ...props
}: FormContainerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        id={id}
        noValidate
        display={"flex"}
        width={"inherit"}
        component={"form"}
        justifyContent={"center"}
      >
        <FlexColumn flexGrow={1} maxWidth={maxWidth} {...props}>
          {children}
        </FlexColumn>
      </Box>
    </LocalizationProvider>
  );
};
