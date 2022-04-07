import users from "../db";
import jwt from "jsonwebtoken";
import * as bycrypt from "bcrypt";

export const userLoginService = (email, password) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    return "Email ou senha inválido";
  }

  const passwordMatch = bycrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "Email ou senha inválido";
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};
