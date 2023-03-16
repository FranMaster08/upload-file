import {videoService} from '../service/index.js';

const videoController = {
    getVideo: async (req, res, next) => {
      try {
        const video = await videoService.findAll();
        res.json({ data: video, status: "succes" });
      } catch (error) {
        next(error);
      }
    },
    createVideo: (req, res, next) => {},
    updateVideo: (req, res, next) => {},
    deleteVideo: (req, res, next) => {},
  };
  export default videoController;