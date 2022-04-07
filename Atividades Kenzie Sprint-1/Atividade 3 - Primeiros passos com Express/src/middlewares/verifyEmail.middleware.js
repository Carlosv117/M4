import users from "../db";

export const verifyEmail = (req, res, next) => {
  const { email } = req.body;

  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.status(400).json({
      error: "This email adress is already being used",
    });
  }

  next();
};
