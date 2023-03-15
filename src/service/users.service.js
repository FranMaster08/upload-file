import { connection } from "../config/index.js";

const userService = {
  findAll: async () => {
    const [rows] = await connection.query("SELECT * FROM usuarios");
    return rows;
  },
  findOne: async (id) => {
    return {};
  },
  create: async (user) => {
    return user;
  },
  update: async (id, newUser) => {
    return newUser;
  },
  delete: async (id) => {
    return id;
  },
};

export default userService;
