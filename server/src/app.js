import express from "express";
import morgan from "morgan";
import cors from "cors";

import provinceRouter from "./routes/province.routes.js";
import suffrageRouter from "./routes/suffrage.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("", provinceRouter);
app.use("", suffrageRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
});

export default app;
