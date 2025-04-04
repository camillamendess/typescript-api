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