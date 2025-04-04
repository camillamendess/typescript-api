import { User } from "../../models/user";

export interface CreateUserParams {
  img: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}