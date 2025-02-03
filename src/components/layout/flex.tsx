import { HasChildren } from "@/types/helper-types";
import { Box, BoxProps } from "@mui/material";

export interface FlexProps extends HasChildren, Omit<BoxProps, "display"> {}

export const Flex = (props: FlexProps) => <Box display={"flex"} {...props} />;

type FlexVariantProps = Omit<FlexProps, "flexDirection">;

export const FlexColumn = ({ gap = 2, ...props }: FlexVariantProps) => (
  <Flex gap={gap} flexDirection={"column"} {...props} />
);

export const FlexRow = ({ gap = 2, ...props }: FlexVariantProps) => (
  <Flex gap={gap} flexDirection={"row"} {...props} />
);
