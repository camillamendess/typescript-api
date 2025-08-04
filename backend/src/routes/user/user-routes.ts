import { Router } from "express";
import { GetUsersController } from "./controllers/get-users/get-users";
import { CreateUserController } from "./controllers/create-users/create-user";
import { UpdateUserController } from "./controllers/update-user/update-user";
import { DeleteUserController } from "./controllers/delete-user/delete-user";
import { MongoGetUsersRepository } from "../../repositories/user/get-users/mongo-get-users";
import { MongoCreateUserRepository } from "../../repositories/user/create-user/mongo-create-user";
import { MongoUpdateUserRepository } from "../../repositories/user/update-user/mongo-update-user";
import { MongoDeleteUserRepository } from "../../repositories/user/delete-user/mongo-delete-user";
import { SearchUsersController } from "./controllers/search-users/search-users";
import { MongoSearchUserRepository } from "../../repositories/user/search-user/mongo-search-user";

const router = Router();

router.get("/users", async (req, res) => {
  const getUsersController = new GetUsersController(new MongoGetUsersRepository());
  const { body, statusCode } = await getUsersController.handle();
  res.status(statusCode).send(body);
});

router.get("/users/search", async (req, res) => {
  const searchUsersController = new SearchUsersController(new MongoSearchUserRepository());
  const { body, statusCode } = await searchUsersController.handle({ query: req.query });
  res.status(statusCode).send(body);
  // Quando chamamos /users/search?name=jo, o Express pega jo de req.query.name.
})

router.post("/users", async (req, res) => {
  const createUserController = new CreateUserController(new MongoCreateUserRepository());
  const { body, statusCode } = await createUserController.handle({ body: req.body });
  res.status(statusCode).send(body);
});

router.patch("/users/:id", async (req, res) => {
  const updateUserController = new UpdateUserController(new MongoUpdateUserRepository());
  const { body, statusCode } = await updateUserController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

router.delete("/users/:id", async (req, res) => {
  const deleteUserController = new DeleteUserController(new MongoDeleteUserRepository());
  const { body, statusCode } = await deleteUserController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default router;