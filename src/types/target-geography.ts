import { z } from "zod";
import { V } from "@/utils/validation";

export const targetGeographySchema = z.object({
  country: V.string("Country"),
  state: V.string("State"),
  city: V.string("City"),
  zipCode: V.string("Zip Code").regex(/^[0-9]{5}(?:-[0-9]{4})?$/),
});

export type TargetGeography = z.infer<typeof targetGeographySchema>;
