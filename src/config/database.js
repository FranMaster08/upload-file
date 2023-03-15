import { createConnection } from "mysql2/promise";

const connection = await createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "fran",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_NAME || "video-upload",
  port: process.env.DB_PORT || "3309",
});

export default connection;
