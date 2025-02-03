"use client";

import { Button, Divider } from "@mui/material";
import { startTransition } from "react";
import { logoutAction } from "@/actions/logout-action";
import Link from "next/link";
import { FlexRow } from "@/components/layout/flex";

export interface PageHeaderMenuProps {
  isLoggedIn: boolean;
}

export const PageHeaderMenu = ({ isLoggedIn }: PageHeaderMenuProps) => (
  <FlexRow>
    {isLoggedIn ? (
      <>
        <Link href={"/customer/campaigns"}>
          <Button variant={"text"}>Campaigns</Button>
        </Link>
        <Divider orientation={"vertical"} flexItem />
        <Button
          variant={"text"}
          onClick={() => startTransition(() => logoutAction())}
        >
          Log Out
        </Button>
      </>
    ) : (
      <Link href={"/login"}>
        <Button variant={"text"}>Sign In</Button>
      </Link>
    )}
  </FlexRow>
);
