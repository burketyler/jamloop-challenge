import { V } from "@/utils/validation";
import { z } from "zod";

export enum TargetDemographyGenders {
  MALE = "Male",
  FEMALE = "Female",
  ANY = "Any",
}

export enum TargetDemographyAges {
  Under5 = "< 5 yrs",
  "6To12" = "6 yrs - 12 yrs",
  "13To19" = "13 yrs - 19 yrs",
  "20To35" = "20 yrs - 35 yrs",
  "36To50" = "36 yrs - 50 yrs",
  Over51 = "51+ yrs",
}

export const targetDemographySchema = z.object({
  ages: V.array("Ages", V.nativeEnum("Ages", TargetDemographyAges)),
  gender: V.nativeEnum("Publishers", TargetDemographyGenders),
});

export type TargetDemography = z.infer<typeof targetDemographySchema>;
