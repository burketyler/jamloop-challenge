"use client";

import { FormActions } from "@/components/ui/form/form-actions";
import { useActionForm } from "@/hooks/use-action-form";
import { createCampaignAction } from "@/features/campaigns/actions/create-campaign-action";
import { createCampaignFormSchema } from "@/types/campaign";
import { TargetDemographyGenders } from "@/types/target-demography";
import dayjs from "dayjs";
import { BaseCampaignForm } from "@/features/campaigns/components/base-campaign-form";
import { FormSubmitButton } from "@/components/ui/form/form-submit-button";

export const CreateCampaignForm = () => {
  const { state, form, isLoading, onSubmit } = useActionForm({
    schema: createCampaignFormSchema,
    action: createCampaignAction,
    props: {
      defaultValues: {
        name: "",
        budget: "",
        startDate: dayjs().toDate(),
        endDate: dayjs().add(1, "day").toDate(),
        publishers: [],
        devices: [],
        demographic: {
          ages: [],
          gender: TargetDemographyGenders.ANY,
        },
        geography: {
          country: "",
          state: "",
          city: "",
          zipCode: "",
        },
      },
    },
  });

  return (
    <BaseCampaignForm id={"create-campaign-form"} form={form} state={state}>
      <FormActions>
        <FormSubmitButton onClick={onSubmit} isLoading={isLoading}>
          Create Campaign
        </FormSubmitButton>
      </FormActions>
    </BaseCampaignForm>
  );
};
