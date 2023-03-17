import app from "./app.js";
import envs from '../config/config-env.js';
app.listen(envs.port, () => console.log(`listen in port ${envs.port}`));
