import { Button, ButtonProps } from "@mui/material";

export interface FormSubmitButtonProps
  extends Omit<ButtonProps, "type" | "variant"> {
  isLoading?: boolean;
}

export const FormSubmitButton = ({
  isLoading,
  onClick,
  children,
  ...props
}: FormSubmitButtonProps) => (
  <Button
    type={"submit"}
    variant={"contained"}
    onClick={onClick}
    startIcon={isLoading}
    loading={isLoading}
    {...props}
  >
    {children}
  </Button>
);
