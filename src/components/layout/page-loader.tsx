import { FlexColumn } from "@/components/layout/flex";
import { CircularProgress } from "@mui/material";

export const PageLoader = () => (
  <FlexColumn alignItems={"center"} justifyContent={"center"}>
    <CircularProgress />
  </FlexColumn>
);
