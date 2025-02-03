import { LoginForm } from "@/features/auth/components/login/login-form";
import { Typography } from "@mui/material";
import { FlexColumn } from "@/components/layout/flex";

export default function LoginPage() {
  return (
    <FlexColumn
      gap={8}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography component={"h1"} variant={"h4"} align={"center"}>
        Welcome back!
      </Typography>
      <LoginForm />
    </FlexColumn>
  );
}
