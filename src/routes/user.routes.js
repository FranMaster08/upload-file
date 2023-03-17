import { Router } from "express";
import { userController } from "../controller/index.js";
const userRoutes = Router();
userRoutes.get("/", userController.getUser);
userRoutes.post("/", userController.createUser);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
