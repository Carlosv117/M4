import users from "../db";

export const updateUserService = (id, email, name) => {
  const updateUser = {
    id,
    name,
    email,
  };

  const userId = users.findIndex((user) => user.id === id);

  if (userId === -1) {
    return "User not found";
  }

  users[userId] = { ...users[userId], ...updateUser };

  return users[userId];
};
