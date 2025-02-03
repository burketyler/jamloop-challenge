"use server";

import { FormState } from "@/types/form-state";
import {
  CreateCampaignRequest,
  createCampaignFormSchema,
} from "@/types/campaign";
import { mockCampaignService } from "@/lib/mock-campaign-service";
import { redirect } from "next/navigation";

export async function createCampaignAction(
  state: FormState = {},
  payload: CreateCampaignRequest,
): Promise<FormState> {
  let redirectUrl: string | undefined;
  state.error ??= {};

  try {
    const campaign = createCampaignFormSchema.parse(payload);
    await mockCampaignService.createCampaign(campaign);
    redirectUrl = "/customer/campaigns";
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    state.error.message =
      "Something went wrong, your campaign couldn't be created right now. Please try again soon.";
  } finally {
    if (redirectUrl) {
      redirect(redirectUrl);
    }
  }

  return state;
}
