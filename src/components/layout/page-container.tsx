import { HasChildren } from "@/types/helper-types";
import { Typography } from "@mui/material";
import { Flex, FlexColumn, FlexProps } from "@/components/layout/flex";
import { ReactNode } from "react";
import { Container } from "@mui/material";

export interface PageContainerProps extends HasChildren, FlexProps {
  heading: ReactNode;
  subHeading?: ReactNode;
  description?: ReactNode;
}

export const PageContainer = ({
  heading,
  children,
  subHeading,
  description,
  ...props
}: PageContainerProps) => {
  return (
    <Container>
      <Flex flexDirection={"column"} gap={4} {...props}>
        <div>
          <Typography component={"h1"} variant={"h5"}>
            {heading}
          </Typography>
          {subHeading && (
            <Typography component={"h2"} variant={"subtitle1"}>
              {subHeading}
            </Typography>
          )}
        </div>
        {description && <Typography>{description}</Typography>}
        <FlexColumn width={"100%"} alignItems={"center"}>
          {children}
        </FlexColumn>
      </Flex>
    </Container>
  );
};
