import { createUserServices } from "../services/createUser";

export const userCreateController = (req, res) => {
  const { email, name } = req.body;

  const user = createUserServices(email, name, res);

  return res.status(201).json(user);
};
