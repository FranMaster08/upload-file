import { connection } from "../config/index.js";

const videoService = {
    findAll: async () => {
      const [rows] = await connection.query("SELECT * FROM videos");
      return rows;
    },
    findOne: async (id) => {
      return {};
    },
    create: async (path) => {
      return path;
    },
    update: async (id, newUpdate) => {
      return newUpdate;
    },
    delete: async (id) => {
      return id;
    },
}
export default videoService