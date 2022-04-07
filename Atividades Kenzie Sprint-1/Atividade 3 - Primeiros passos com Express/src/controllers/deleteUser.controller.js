import { deleteUserService } from "../services/deleteUser.service";

export const deleteUserController = (req, res) => {
  const { id } = req.params;

  const updateUser = deleteUserService(id);

  return res.json(updateUser);
};
