import { User } from "../../models/user"
import { HttpResponse } from "../protocols";

export interface IGetUserController {
  handle(): Promise<HttpResponse<User[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}

