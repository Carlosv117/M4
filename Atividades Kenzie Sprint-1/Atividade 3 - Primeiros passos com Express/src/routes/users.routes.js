import { Router } from "express";
import { userCreateController } from "../controllers/createUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { listUsersController } from "../controllers/listUsers.controller";
import { updateUserController } from "../controllers/updateUser.controller";
import { userLoginController } from "../controllers/userLogin.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const router = Router();

router.post("", verifyEmail, userCreateController);
router.get("", listUsersController);
router.put("/:id", verifyToken, updateUserController);
router.delete("/:id", verifyToken, deleteUserController);
router.post("/login", userLoginController);
