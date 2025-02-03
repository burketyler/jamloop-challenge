import { FlexColumn, FlexRow } from "@/components/layout/flex";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <FlexRow gap={5} justifyContent={"center"} alignItems={"center"}>
      <Image
        src={"/images/error-icon.png"}
        alt={"Resource not found"}
        width={150}
        height={150}
      />
      <FlexColumn>
        <Typography component={"h1"} variant={"h2"}>
          Oops!
        </Typography>
        <Typography>
          The resource you requested could not be found. Please check the URL
          and try again.
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
