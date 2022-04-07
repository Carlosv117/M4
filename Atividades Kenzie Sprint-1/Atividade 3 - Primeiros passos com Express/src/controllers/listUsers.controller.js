import { listUsersServices } from "../services/listUsers.service";

export const listUsersController = (req, res) => {
  const users = listUsersServices();

  return res.json(users);
};
