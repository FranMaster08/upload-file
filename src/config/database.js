import { createConnection } from "mysql2/promise";
import envs from "./config-env.js";

const connection = await createConnection({
  host: envs.db_host,
  user: envs.db_user,
  password: envs.db_password,
  database: envs.db_name,
  port: envs.db_port
});

export default connection;
