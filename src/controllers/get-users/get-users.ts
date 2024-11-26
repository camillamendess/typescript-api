import { IGetUserController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUserController {

  constructor(private readonly getUsersRepository: IGetUsersRepository) { }

  async handle() {
    try {
      // Validar requisição
      // Direcionar chamada para repository
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      }
    }


  }
}