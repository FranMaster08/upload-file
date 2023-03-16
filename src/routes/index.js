import userRoutes from "./user.routes.js";
import videoRoutes from "./video.routes.js";
import { Router } from "express";
const routes = Router();
routes.use("/user", userRoutes);
routes.use("/video", videoRoutes);
export default routes;
