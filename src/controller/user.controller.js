import { request } from "express";
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
  createUser: async (req, res, next) => {
    try {
      const user = req.body;
      const createdUser = await userService.create(user);
      res.status(201).json(createdUser);

    } catch (error) {
      next(error);
    }
  },
  updateUser: async (req = request, res, next) => {
    try {
      const id = req.params.id;
      const newUser = req.body;
      const userUpdated = await userService.update(id, newUser);
      res.status(200).json({ data: newUser });
    } catch (error) {
      next(error);
    }

  },
  deleteUser: async (req, res, next) => {
    try {
      const id = req.params.id;
      const deletedUser = await userService.delete(id);
      res.status(200).json({ action: 'Usuario eliminado con exito' });
    } catch (error) {
      next(error);
    }
  },
};
export default userController;
