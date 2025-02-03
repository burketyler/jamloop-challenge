"use client";

import { FlexColumn, FlexRow } from "@/components/layout/flex";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <FlexRow gap={5} justifyContent={"center"} alignItems={"center"}>
      <Image
        src={"/images/not-found-icon.png"}
        alt={"Page error"}
        width={150}
        height={150}
      />
      <FlexColumn>
        <Typography component={"h1"} variant={"h2"}>
          Uh oh!
        </Typography>
        <Typography>
          We encountered an unexpected error while processing your request.
          Please try again soon.
        </Typography>
        <FlexColumn alignItems={"center"}>
          <Link href={"/"}>
            <Button variant={"contained"}>Go To Homepage</Button>
          </Link>
        </FlexColumn>
      </FlexColumn>
    </FlexRow>
  );
}
