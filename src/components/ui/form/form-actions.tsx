import { HasChildren } from "@/types/helper-types";
import { FlexRow } from "@/components/layout/flex";

export const FormActions = ({ children }: HasChildren) => (
  <FlexRow alignItems={"center"} justifyContent={"flex-end"} width={"100%"}>
    <FlexRow
      justifyContent={Array.isArray(children) ? "space-between" : "flex-end"}
      width={"inherit"}
    >
      {children}
    </FlexRow>
  </FlexRow>
);
