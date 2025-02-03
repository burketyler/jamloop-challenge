import { FlexRow } from "@/components/layout/flex";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { PageContainer } from "@/components/layout/page-container";
import Link from "next/link";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { mockCampaignService } from "@/lib/mock-campaign-service";

export default async function CampaignsPage() {
  const campaigns = await mockCampaignService.listCampaigns();

  return (
    <PageContainer
      heading={"Campaigns"}
      description={
        "Welcome to your Advertising Campaign Dashboard! This page is your central hub for managing all your advertising efforts. Here, you can easily view, edit, and optimize your active campaigns in real-time. Take control of your advertising strategy and achieve your business goals with ease—start exploring today!"
      }
    >
      <FlexRow justifyContent={"flex-end"}>
        <Link href={"/customer/campaigns/create"}>
          <Button variant={"contained"} startIcon={<AddSharpIcon />}>
            Create Campaign
          </Button>
        </Link>
      </FlexRow>
      <TableContainer component={Paper}>
        <Table aria-label={"Campaigns Table"}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Publishers</TableCell>
              <TableCell>Devices</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaigns.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Link href={`/customer/campaigns/${row.id}`}>{row.name}</Link>
                </TableCell>
                <TableCell>{row.startDate.toLocaleDateString()}</TableCell>
                <TableCell>{row.endDate.toLocaleDateString()}</TableCell>
                <TableCell>{row.geography.country}</TableCell>
                <TableCell>{row.publishers.join(", ")}</TableCell>
                <TableCell>{row.devices.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
}
