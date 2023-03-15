import { config } from "dotenv";
config();
import app from "./app.js";
app.listen(3000, () => console.log(`listen in port ${3000}`));
