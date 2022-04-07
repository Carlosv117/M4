import { createUserServices } from "../services/createUser.service";

export const userCreateController = async (req, res) => {
  const { email, name, password } = req.body;

  const user = await createUserServices(email, name, password, res);

  return res.status(201).json(user);
};
