import { User } from "../../../../models/user";

export interface UpdateUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
  city?: string;
  country?: string;
  img?: string;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}