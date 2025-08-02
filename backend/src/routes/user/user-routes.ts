import { Router } from "express";
import { GetUsersController } from "./controllers/get-users/get-users";
import { CreateUserController } from "./controllers/create-users/create-user";
import { UpdateUserController } from "./controllers/update-user/update-user";
import { DeleteUserController } from "./controllers/delete-user/delete-user";
import { MongoGetUsersRepository } from "../../repositories/get-users/mongo-get-users";
import { MongoCreateUserRepository } from "../../repositories/create-user/mongo-create-user";
import { MongoUpdateUserRepository } from "../../repositories/update-user/mongo-update-user";
import { MongoDeleteUserRepository } from "../../repositories/delete-user/mongo-delete-user";

const router = Router();

router.get("/", async (req, res) => {
  const getUsersController = new GetUsersController(new MongoGetUsersRepository());
  const { body, statusCode } = await getUsersController.handle();
  res.status(statusCode).send(body);
});

router.post("/", async (req, res) => {
  const createUserController = new CreateUserController(new MongoCreateUserRepository());
  const { body, statusCode } = await createUserController.handle({ body: req.body });
  res.status(statusCode).send(body);
});

router.patch("/:id", async (req, res) => {
  const updateUserController = new UpdateUserController(new MongoUpdateUserRepository());
  const { body, statusCode } = await updateUserController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

router.delete("/:id", async (req, res) => {
  const deleteUserController = new DeleteUserController(new MongoDeleteUserRepository());
  const { body, statusCode } = await deleteUserController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default router;