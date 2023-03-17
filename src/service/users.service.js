import { connection } from "../config/index.js";
import { userEntity } from "../entities/index.js";
import { v4 as uuidv4 } from "uuid";
const userService = {
  findAll: async () => {
    const [rows, fields] = await connection.query("SELECT * FROM usuarios");
    return rows;
  },
  findOne: async (id) => {
    return {};
  },
  create: async (user = userEntity) => {
    try {

      const row = await connection.query(`INSERT INTO usuarios (id, name, lastname, address, email, password) VALUES ('${uuidv4()}', '${user.name}', '${user.lastname}', '${user.address}', '${user.email}', '${user.password}');`);
      return user;

    } catch (err) {
      throw new Error(err);
    }
  },
  update: async (id, newUser = userEntity) => {
    try {
      const updateUser = await connection.query(`UPDATE usuarios SET 
      name = '${newUser.name}', lastname = '${newUser.lastname}', 
      address = '${newUser.address}', email = '${newUser.email}', 
      password = '${newUser.password}' WHERE (id = '${id}');
      `);
      return updateUser;
    } catch (error) {
      throw new Error('No se actualizo usuario')
    }

  },
  delete: async (id) => {

    try {
      const deletedUser = await connection.query(`DELETE FROM usuarios WHERE 
      (id = '${id}');`);
      return deletedUser
    } catch (error) {
      throw new Error('Id no encontrado')
    }
  },
};

export default userService;
