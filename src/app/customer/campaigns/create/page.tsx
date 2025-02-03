import { PageContainer } from "@/components/layout/page-container";
import { CreateCampaignForm } from "@/features/campaigns/components/create-campaign-form";

export default function CreateCampaignPage() {
  return (
    <PageContainer
      heading={"Create a new campaign"}
      subHeading={
        "Design a tailored advertising strategy to reach your ideal audience"
      }
      description={
        "Name your campaign, set your Budget Goal to align with your financial objectives, and define the start and end dates to control the campaign's duration. Ensure your campaign reaches your target demographic, viewing platform and publishers of choice by choosing from the options below."
      }
    >
      <CreateCampaignForm />
    </PageContainer>
  );
}
