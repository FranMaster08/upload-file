import express from "express";
import routes from "../routes/index.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json({ msg: "ok" });
});
app.use('/api' , routes )
export default app;
