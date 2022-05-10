import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userListeController from "../controllers/users/userList.controller";

const router = Router()

router.post("", userCreateController)
router.get("", userListeController)

export default router