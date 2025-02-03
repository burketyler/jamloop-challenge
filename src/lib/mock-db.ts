import {
  CampaignDevices,
  CampaignPublishers,
  UpdateCampaignRequest,
} from "@/types/campaign";
import dayjs from "dayjs";
import {
  TargetDemographyAges,
  TargetDemographyGenders,
} from "@/types/target-demography";

export interface User {
  id: string;
  username: string;
  password: string;
  roles: string[];
  firstName: string;
  lastName: string;
}

export interface Campaign extends UpdateCampaignRequest {
  id: string;
  userId: string;
}

const artificialDelay = 50;

/*
 * In a real application, I wouldn't recommend connecting directly to a database via the Next server. Generally I
 * I would prefer making API calls to external services, however for the purpose of this POC we will assume we have
 * a DB connection
 */
export class MockDb {
  private usersTable: User[] = [
    {
      id: "1",
      username: "1@test.com",
      password: "Test123",
      roles: ["customer"],
      firstName: "Customer",
      lastName: "One",
    },
    {
      id: "2",
      username: "2@test.com",
      password: "Test123",
      roles: ["customer"],
      firstName: "Customer",
      lastName: "Two",
    },
  ];

  private campaignsTable: Campaign[] = [
    {
      id: "1",
      userId: "1",
      name: "Campaign One",
      budget: "1000",
      startDate: dayjs().toDate(),
      endDate: dayjs().add(12, "days").toDate(),
      demographic: {
        ages: [TargetDemographyAges["6To12"]],
        gender: TargetDemographyGenders.MALE,
      },
      geography: {
        country: "United States",
        city: "Parker",
        state: "Colorado",
        zipCode: "80134",
      },
      publishers: [CampaignPublishers.HULU, CampaignPublishers.ABC],
      devices: [CampaignDevices.WEB],
    },
    {
      id: "2",
      userId: "1",
      name: "Campaign Two",
      budget: "3500",
      startDate: dayjs().toDate(),
      endDate: dayjs().add(3, "days").toDate(),
      demographic: {
        ages: [TargetDemographyAges["6To12"], TargetDemographyAges["13To19"]],
        gender: TargetDemographyGenders.FEMALE,
      },
      geography: {
        country: "United States",
        city: "Parker",
        state: "Colorado",
        zipCode: "80134",
      },
      publishers: [CampaignPublishers.FOX_NEWS, CampaignPublishers.FOX_SPORTS],
      devices: [CampaignDevices.WEB, CampaignDevices.CTV],
    },
    {
      id: "3",
      userId: "2",
      name: "Campaign Three",
      budget: "50000",
      startDate: dayjs().toDate(),
      endDate: dayjs().add(3, "months").toDate(),
      demographic: {
        ages: [TargetDemographyAges["Over51"]],
        gender: TargetDemographyGenders.ANY,
      },
      geography: {
        country: "United States",
        city: "Parker",
        state: "Colorado",
        zipCode: "80134",
      },
      publishers: [CampaignPublishers.ABC, CampaignPublishers["A&E"]],
      devices: [CampaignDevices.CTV],
    },
    {
      id: "4",
      userId: "2",
      name: "Campaign Four",
      budget: "1055",
      startDate: dayjs().toDate(),
      endDate: dayjs().add(1, "days").toDate(),
      demographic: {
        ages: [TargetDemographyAges["20To35"]],
        gender: TargetDemographyGenders.ANY,
      },
      geography: {
        country: "United States",
        city: "Parker",
        state: "Colorado",
        zipCode: "80134",
      },
      publishers: [CampaignPublishers.HULU],
      devices: [CampaignDevices.MOBILE],
    },
    {
      id: "5",
      userId: "1",
      name: "Campaign Five",
      budget: "15000",
      startDate: dayjs().toDate(),
      endDate: dayjs().add(26, "days").toDate(),
      demographic: {
        ages: [TargetDemographyAges["20To35"], TargetDemographyAges["36To50"]],
        gender: TargetDemographyGenders.MALE,
      },
      geography: {
        country: "United States",
        city: "Parker",
        state: "Colorado",
        zipCode: "80134",
      },
      publishers: [CampaignPublishers.DISCOVERY],
      devices: [CampaignDevices.MOBILE, CampaignDevices.CTV],
    },
  ];

  public async getUserByUsername(username: string): Promise<User | undefined> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(this.usersTable.find((user) => user.username === username)),
        artificialDelay,
      );
    });
  }

  public async listCampaignsByUser(userId: string): Promise<Campaign[]> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            this.campaignsTable.filter(
              (campaign) => campaign.userId === userId,
            ),
          ),
        artificialDelay,
      );
    });
  }

  public async getCampaignById(
    id: string,
    userId: string,
  ): Promise<Campaign | undefined> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            this.campaignsTable.find(
              (campaign) => campaign.id === id && campaign.userId === userId,
            ),
          ),
        artificialDelay,
      );
    });
  }

  public async createCampaign(campaign: Omit<Campaign, "id">): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.campaignsTable.push({
          ...campaign,
          id: `${this.campaignsTable.length + 1}`,
        });
        resolve();
      }, artificialDelay);
    });
  }

  public async updateCampaign(
    campaign: Partial<Campaign>,
    userId: string,
  ): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.campaignsTable.findIndex(
          (existing) =>
            existing.id === campaign.id && existing.userId === userId,
        );

        if (index >= 0) {
          this.campaignsTable[index] = {
            ...this.campaignsTable[index],
            ...campaign,
          };
        }

        resolve();
      }, artificialDelay);
    });
  }
}

export const mockDb = new MockDb();
