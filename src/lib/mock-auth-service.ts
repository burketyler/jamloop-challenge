import { mockDb, MockDb, User } from "@/lib/mock-db";
import dayjs from "dayjs";

export interface SessionToken
  extends Pick<User, "id" | "roles" | "firstName" | "lastName"> {
  expires: Date;
}

export type AuthError = "INCORRECT_PASSWORD" | "USER_NOT_FOUND";

export class MockAuthService {
  constructor(private readonly db: MockDb) {}

  /*
   In a real application this would usually be a separate auth service, this code only serves the purpose of
   generating a dummy auth token.
  */
  public async login(
    username: string,
    password: string,
  ): Promise<SessionToken | AuthError> {
    const user = await this.db.getUserByUsername(username);

    if (!user) {
      return "USER_NOT_FOUND";
    }

    if (user.password !== password) {
      return "INCORRECT_PASSWORD";
    }

    return this.createToken(user);
  }

  /*
   In a real application this would likely be a JWT token signed with a secret key, and contain more. You would
   generally generate a refresh token (long-lived) as well as an auth token (short-lived) to allow for fine-grained
   control over session times.
  */
  private createToken({ id, roles, firstName, lastName }: User): SessionToken {
    const expires = dayjs().add(1, "day").toDate();

    return {
      expires,
      id,
      roles,
      firstName,
      lastName,
    };
  }
}

export const mockAuthService = new MockAuthService(mockDb);
