import users from "../db";
import { v4 as uuidv4 } from "uuid";
import * as bycrypt from "bcrypt";

export const createUserServices = async (email, name, password, res) => {
  const hashedPassword = await bycrypt.hash(password, 10);

  const newUser = {
    email,
    name,
    password: hashedPassword,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};
