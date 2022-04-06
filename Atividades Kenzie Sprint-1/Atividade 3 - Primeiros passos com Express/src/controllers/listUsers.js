import { listUsersServices } from "../services/listUsers";

export const listUsersController = (req, res) => {
  const users = listUsersServices();

  return res.json(users);
};
