import { Router } from "express";
import { userController } from "../controller/index.js";
const userRoutes = Router();
userRoutes.get("/", userController.getUser);
userRoutes.get("/:email", userController.getOne);
userRoutes.post("/", userController.createUser);
userRoutes.put("/", userController.updateUser);
userRoutes.delete("/", userController.deleteUser);

export default userRoutes;
