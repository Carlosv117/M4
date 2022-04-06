import users from "../db";

export const deleteUserService = (id) => {
  const userId = users.findIndex((user) => user.id === id);

  if (userId === -1) {
    return "User not found";
  }

  users.splice(userId, 1);

  return "Delete User";
};
