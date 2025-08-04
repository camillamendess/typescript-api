import { MongoClient } from "../../../database/mongo";
import { User } from "../../../models/user";
import { ISearchUsersRepository } from "../../../routes/user/controllers/search-users/protocols";
import { MongoUser } from "../../mongo-protocols";

export class MongoSearchUserRepository implements ISearchUsersRepository {
  async searchUsers(name: string): Promise<User[]> {
    // Buscando usuarios cujo nome contenha o termo digitado (case-insensitive)

    const users = await MongoClient.db
      .collection<MongoUser>("users")
      .find({
        $or: [
          { firstName: { $regex: name, $options: "i" } }, // opção "i" para não diferenciar maiúsculas/minúsculas.
          { lastName: { $regex: name, $options: "i" } },
        ],
      }).toArray();

    // convertendo ObjectId (_id) em string id
    return users.map(({ _id, ...rest }) => ({
      id: _id.toHexString(),
      ...rest,
    }));
  }
}