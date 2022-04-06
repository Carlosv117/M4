import { Router } from "express";
import { userCreateController } from "../controllers/createUser";
import { deleteUserController } from "../controllers/deleteUser";
import { listUsersController } from "../controllers/listUsers";
import { updateUserController } from "../controllers/updateUser";

export const router = Router();

router.post("", userCreateController);
router.get("", listUsersController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
