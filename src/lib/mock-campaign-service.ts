import { Campaign, mockDb, MockDb } from "@/lib/mock-db";
import { assertSession } from "@/utils/auth";

export class MockCampaignService {
  constructor(private db: MockDb) {}

  public async getCampaign(id: string) {
    return this.db.getCampaignById(id, await this.getUserId());
  }

  public async listCampaigns() {
    return this.db.listCampaignsByUser(await this.getUserId());
  }

  public async updateCampaign(campaign: Partial<Campaign>) {
    return this.db.updateCampaign(campaign, await this.getUserId());
  }

  public async createCampaign(campaign: Omit<Campaign, "id" | "userId">) {
    return this.db.createCampaign({
      ...campaign,
      userId: await this.getUserId(),
    });
  }

  private async getUserId() {
    return (await assertSession()).id;
  }
}

export const mockCampaignService = new MockCampaignService(mockDb);
