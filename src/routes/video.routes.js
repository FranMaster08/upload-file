import {Router} from 'express';
import {videoController }from '../controller/index.js';

const videoRoutes = Router();
videoRoutes.get("/", videoController.getVideo);
/*videoRoutes.post("/", videoController.createvideo);
videoRoutes.put("/", videoController.updatevideo);
videoRoutes.delete("/", videoController.deletevideo);*/

export default videoRoutes;