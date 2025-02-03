"use client";

import { FormActions } from "@/components/ui/form/form-actions";
import { useActionForm } from "@/hooks/use-action-form";
import {
  UpdateCampaignRequest,
  updateCampaignFormSchema,
  CreateCampaignRequest,
} from "@/types/campaign";
import { BaseCampaignForm } from "@/features/campaigns/components/base-campaign-form";
import { updateCampaignAction } from "@/features/campaigns/actions/update-campaign-action";
import { FormSubmitButton } from "@/components/ui/form/form-submit-button";
import { UseFormReturn } from "react-hook-form";

export interface UpdateCampaignFormProps {
  campaign: UpdateCampaignRequest;
}

export const UpdateCampaignForm = ({ campaign }: UpdateCampaignFormProps) => {
  const { state, form, isLoading, onSubmit } = useActionForm({
    schema: updateCampaignFormSchema,
    action: updateCampaignAction,
    props: {
      defaultValues: campaign,
    },
  });

  return (
    <BaseCampaignForm
      state={state}
      id={"update-campaign-form"}
      form={form as unknown as UseFormReturn<CreateCampaignRequest>}
    >
      <FormActions>
        <FormSubmitButton onClick={onSubmit} isLoading={isLoading}>
          Save Campaign
        </FormSubmitButton>
      </FormActions>
    </BaseCampaignForm>
  );
};
