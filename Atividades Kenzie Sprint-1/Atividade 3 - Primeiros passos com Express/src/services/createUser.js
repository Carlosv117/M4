import users from "../db";
import { v4 as uuidv4 } from "uuid";

export const createUserServices = (email, name, res) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return res.status(400).json({
      error: "This email is already being used",
    });
  }

  const newUser = {
    email,
    name,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};
