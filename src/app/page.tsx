import { FlexColumn } from "@/components/layout/flex";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <FlexColumn gap={5} justifyContent={"space-between"} alignItems={"center"}>
      <Typography
        component={"h1"}
        variant={"h3"}
        maxWidth={"35rem"}
        textAlign={"center"}
      >
        Elevate your brand with Connected TV
      </Typography>
      <Typography
        component={"h2"}
        variant={"h5"}
        maxWidth={"60rem"}
        textAlign={"center"}
      >
        Join thousands of agencies and brands who trust JamLoop DSP™ to reach
        their most valuable streaming TV viewers.
      </Typography>
      <Link href={"/customer/campaigns"}>
        <Button variant={"contained"} size={"large"}>
          Create a campaign
        </Button>
      </Link>
    </FlexColumn>
  );
}
