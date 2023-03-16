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
  getOne: async (req, res, next) => {
    try {
      const email = req.params.email;
      const users = await userService.findOne(email);
      res.json({ data: users, status: "succes" });
    } catch (error) {
      next(error);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const userRequest = req.body;
      const user = await userService.create(userRequest);
      res.json({ data: user, status: "succes" });
    } catch (error) {
      res.status(500).json({ data: error, status: "false" });
    }
  },
  updateUser: (req, res, next) => {},
  deleteUser: (req, res, next) => {},
};
export default userController;
