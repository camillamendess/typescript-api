import validator from "validator";
import { User } from "../../models/user";
import { HttpResponse, HttpRequest, IController } from "../protocols";
import { CreateUserParams, ICreateUserRepository } from "./protocols";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) { }

  async handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User | string>> {
    try {

      // verificar campos obrigatorios
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return {
            statusCode: 400,
            body: `Field ${field} is required.`,
          };
        }
      }

      // verificar se o email é válido
      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: "Email is invalid"
        }
      }

      const user = await this.createUserRepository.createUser(httpRequest.body!);

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      console.error("Error in CreateUserController:", error);
      return {
        statusCode: 500,
        body: "something went wrong."
      };
    }
  }
}