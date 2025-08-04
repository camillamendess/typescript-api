import { User } from "../../../../models/user";

export interface ISearchUsersRepository {
  searchUsers(name: string): Promise<User[]>;
}
