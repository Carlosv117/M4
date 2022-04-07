import { userLoginService } from "../services/userLogin.service";

export const userLoginController = (req, res) => {
  const { email, password } = req.body;

  const userLogin = userLoginService(email, password);

  return res.json(userLogin);
};
