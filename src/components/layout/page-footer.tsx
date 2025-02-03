import { FlexRow } from "@/components/layout/flex";
import { Typography } from "@mui/material";

export const PageFooter = () => (
  <footer>
    <FlexRow
      p={2}
      height={"3rem"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography>
        © {new Date().getFullYear()} JamLoop LLC. All Rights Reserved.
      </Typography>
    </FlexRow>
  </footer>
);
