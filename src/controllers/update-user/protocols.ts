import { User } from "../../models/user";
import { HttpResponse, HttpResquest } from "../protocols";

export interface UpdateUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdateUserController {
  handle(HttpResquest: HttpResquest<any>): Promise<HttpResponse<User>>
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}