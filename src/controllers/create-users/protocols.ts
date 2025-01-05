import { User } from "../../models/user";
import { HttpResponse, HttpResquest } from "../protocols";

export interface ICreateUserController {
  handle(httpRequest: HttpResquest<CreateUserParams>): Promise<HttpResponse<User>>;
}

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}