import { PageContainer } from "@/components/layout/page-container";
import { UpdateCampaignForm } from "@/features/campaigns/components/update-campaign-form";
import { mockCampaignService } from "@/lib/mock-campaign-service";
import { DynamicRouteProps } from "@/types/helper-types";
import { notFound } from "next/navigation";

export default async function EditCampaignPage({ params }: DynamicRouteProps) {
  const id = (await params).id;
  const campaign = await mockCampaignService.getCampaign(id);

  if (!campaign) {
    notFound();
  }

  return (
    <PageContainer
      heading={"Edit campaign"}
      subHeading={
        "Make quick adjustments or overhaul your strategy—your campaign, your control"
      }
      description={
        "This page allows you to fine-tune your existing campaigns for optimal performance. Update key details, or adjust your Target Demographic and Geo to better reach your audience. Modify your desired Publishers or change target Devices to ensure your ads are displayed where they matter most."
      }
    >
      {<UpdateCampaignForm campaign={campaign} />}
    </PageContainer>
  );
}
