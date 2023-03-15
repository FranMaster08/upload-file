import { userService } from "../service/index.js";
const userController = {
  getUser: async (req, res, next) => {
    try {
      const users = await userService.findAll();
      res.json({ data: users, status: "succes" });
    } catch (error) {
      next(error);
    }
  },
  createUser: (req, res, next) => {},
  updateUser: (req, res, next) => {},
  deleteUser: (req, res, next) => {},
};
export default userController;
