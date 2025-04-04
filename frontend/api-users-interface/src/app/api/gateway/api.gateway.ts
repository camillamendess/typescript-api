import axios, { AxiosInstance } from "axios";
import { config } from "dotenv";
import { CreateUserInputDTO, CreateUserOutputDTO, GetUsersDTO, ResponseDTO } from "./api.gateway.dto";

config();

export class ApiGateway {
  public gateway: AxiosInstance;

  constructor() {
    this.gateway = axios.create({
      baseURL: process.env.NEXT_PUBLIC_MAIN_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async getUsers(): Promise<ResponseDTO<GetUsersDTO[]>> {
    return this.gateway.get("/users");
  }

  public async getUserById(id: string): Promise<GetUsersDTO> {
    return this.gateway.get(`/users/${id}`);
  }

  public async createUser(input: CreateUserInputDTO): Promise<CreateUserOutputDTO> {
    return this.gateway.post("/users", input);
  }

  // public async updateUser(id: string, data: any): Promise<any> {
  //   return this.gateway.patch(`/users/${id}`, data);
  // }

  // public async deleteUser(id: string): Promise<any> {
  //   return this.gateway.delete(`/users/${id}`);
  // }
}

export const apiGateway = new ApiGateway();
