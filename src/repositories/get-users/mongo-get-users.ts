import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [{
      firstName: "Camilla",
      lastName: "Mendes",
      email: "cami@gmail.com",
      password: "123"
    },
    ];
  }
}