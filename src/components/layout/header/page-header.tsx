import Image from "next/image";
import { FlexRow } from "@/components/layout/flex";
import { Box } from "@mui/material";
import Link from "next/link";
import { isLoggedIn } from "@/utils/auth";
import { PageHeaderMenu } from "@/components/layout/header/page-header-menu";

export async function PageHeader() {
  return (
    <header>
      <FlexRow
        p={2}
        minHeight={"3.5rem"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Link href="/">
            <Image
              priority
              width={"257"}
              height={"66"}
              alt={"JamLoop"}
              src={"/images/jam-loop-logo.png"}
            />
          </Link>
        </Box>
        <Box>
          <PageHeaderMenu isLoggedIn={await isLoggedIn()} />
        </Box>
      </FlexRow>
    </header>
  );
}
