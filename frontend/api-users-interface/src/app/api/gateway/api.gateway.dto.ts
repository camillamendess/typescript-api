export interface ResponseDTO<T> {
  data: T;
  message: string;
  status: number;
}

export interface GetUsersDTO {
  id: string;
  img: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
}

export interface CreateUserInputDTO {
  img: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
}

export interface CreateUserOutputDTO {
  id: string;
  img: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
}

export interface UpdateUserInputDTO {
  id: string;
  img?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
}
export interface UpdateUserOutputDTO {
  id: string;
  img: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
}
export interface DeleteUserInputDTO {
  id: string;
}
export interface DeleteUserOutputDTO {
  id: string;
  message: string;
}

export interface SearchUserInputDTO {
  name: string;
}

export type SearchUserOutputDTO = GetUsersDTO[];