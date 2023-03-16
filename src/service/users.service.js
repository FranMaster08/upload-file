import { connection } from "../config/index.js";
import { userEntity } from "../entities/index.js";
import { v4 as uuid } from "uuid";

const userService = {
  findAll: async () => {
    const [rows] = await connection.query("SELECT * FROM usuarios");
    return userService.adaptersArray(rows);
  },
  findOne: async (email) => {
    const [rows] = await connection.query(
      `SELECT * FROM usuarios where email = '${email}'`
    );
    return userService.adaptersArray(rows)[0];
  },
  create: async (user = userEntity) => {
    const dato = await connection.query(
      `INSERT INTO usuarios (id, name, lastname, address, email, password) VALUES ('${uuid()}', '${
        user.name
      }', '${user.lastname}', '${user.address}', '${user.email}', '${
        user.password
      }');`
    );
    return user;
  },
  update: async (id, newUser) => {
    return newUser;
  },
  delete: async (id) => {
    return id;
  },
  adaptersArray: (rows) => {
    return rows.map(
      (itemBaseDeDatos) =>
        new userEntity(
          itemBaseDeDatos.name,
          itemBaseDeDatos.lastname,
          itemBaseDeDatos.address,
          itemBaseDeDatos.email,
          itemBaseDeDatos.password,
          itemBaseDeDatos.id
        )
    );
  },
};

export default userService;
