"use server";

import { FormState } from "@/types/form-state";
import { mockCampaignService } from "@/lib/mock-campaign-service";
import { redirect } from "next/navigation";
import {
  UpdateCampaignRequest,
  updateCampaignFormSchema,
} from "@/types/campaign";

export async function updateCampaignAction(
  state: FormState = {},
  payload: UpdateCampaignRequest,
): Promise<FormState> {
  let redirectUrl: string | undefined;
  state.error ??= {};

  try {
    const campaign = updateCampaignFormSchema.parse(payload);
    await mockCampaignService.updateCampaign(campaign);
    redirectUrl = `/customer/campaigns`;
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    state.error.message =
      "Something went wrong, your campaign couldn't be updated right now. Please try again soon.";
  } finally {
    if (redirectUrl) {
      redirect(redirectUrl);
    }
  }

  return state;
}
