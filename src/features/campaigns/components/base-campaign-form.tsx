import { FormGrid } from "@/components/ui/form/form-grid";
import { FormTextField } from "@/components/ui/form/controls/form-text-field";
import { FormContainer } from "@/components/ui/form/form-container";
import {
  CampaignDevices,
  CampaignPublishers,
  CreateCampaignRequest,
} from "@/types/campaign";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import { FormDatePickerField } from "@/components/ui/form/controls/form-date-picker-field";
import { enumToSelectOptions } from "@/utils/enum";
import { FormMultipleSelectField } from "@/components/ui/form/controls/form-multiple-select-field";
import { FormTitle } from "@/components/ui/form/form-title";
import { FormSelectField } from "@/components/ui/form/controls/form-select-field";
import {
  TargetDemographyAges,
  TargetDemographyGenders,
} from "@/types/target-demography";
import { FormError } from "@/components/ui/form/form-error";
import { FormState } from "@/types/form-state";
import { HasChildren } from "@/types/helper-types";
import { UseFormReturn } from "react-hook-form";

const devices = enumToSelectOptions(CampaignDevices);
const ages = enumToSelectOptions(TargetDemographyAges);
const publishers = enumToSelectOptions(CampaignPublishers);
const genders = enumToSelectOptions(TargetDemographyGenders);

export interface BaseCampaignFormProps extends HasChildren {
  id: string;
  state: FormState;
  form: UseFormReturn<CreateCampaignRequest>;
}

export const BaseCampaignForm = ({
  id,
  form,
  state,
  children,
}: BaseCampaignFormProps) => {
  return (
    <FormContainer id={id}>
      <FormGrid>
        <FormTitle>Campaign Details</FormTitle>
        <FormTextField name={"name"} label={"Name"} control={form.control} />
        <FormTextField
          name={"budget"}
          label={"Budget"}
          placeholder={"Enter amount"}
          control={form.control}
          endAdornment={"USD"}
          startAdornment={<AttachMoneySharpIcon />}
        />
        <FormDatePickerField
          span={6}
          disablePast
          name={"startDate"}
          label={"Start Date"}
          control={form.control}
        />
        <FormDatePickerField
          span={6}
          disablePast
          name={"endDate"}
          label={"End Date"}
          control={form.control}
        />
        <FormMultipleSelectField
          name={"publishers"}
          label={"Publishers"}
          control={form.control}
          options={publishers}
        />
        <FormMultipleSelectField
          name={"devices"}
          label={"Devices"}
          control={form.control}
          options={devices}
        />
        <FormTitle>Demographic</FormTitle>
        <FormSelectField
          name={"demographic.gender"}
          label={"Gender"}
          control={form.control}
          options={genders}
        />
        <FormMultipleSelectField
          name={"demographic.ages"}
          label={"Ages"}
          control={form.control}
          options={ages}
        />
        <FormTitle>Geography</FormTitle>
        <FormTextField
          name={"geography.country"}
          label={"Country"}
          control={form.control}
        />
        <FormTextField
          name={"geography.state"}
          label={"State"}
          control={form.control}
        />
        <FormTextField
          name={"geography.city"}
          label={"City"}
          control={form.control}
        />
        <FormTextField
          name={"geography.zipCode"}
          label={"Zip Code"}
          control={form.control}
        />
        <FormError>{state?.error?.message}</FormError>
      </FormGrid>
      {children}
    </FormContainer>
  );
};
